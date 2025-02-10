"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

interface Item {
  img: StaticImageData;
  desc: string;
}

export default function ProgressSlider({ items }: { items: Item[] }) {
  const duration: number = 5000;
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // 애니메이션 중 여부

  useEffect(() => {
    // active 상태가 바뀔 때마다 애니메이션을 재시작
    if (isAnimating) {
      firstFrameTime.current = performance.now();
      frame.current = requestAnimationFrame(animate);
    }

    return () => {
      // 컴포넌트가 unmount 될 때 애니메이션을 정리
      cancelAnimationFrame(frame.current);
    };
  }, [active, isAnimating]);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((prevActive) => (prevActive + 1) % items.length);
      setIsAnimating(false); // 애니메이션 종료
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setActive((prevActive) => (prevActive + 1) % items.length);
      setProgress(0);
      setIsAnimating(true); // 애니메이션 시작
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setActive(active === 0 ? items.length - 1 : active - 1);
      setProgress(0);
      setIsAnimating(true); // 애니메이션 시작
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto text-center">
      {/* Item image */}
      <div className="relative flex flex-col">
        {items.map((item, index) => (
          <Transition
            key={index}
            show={active === index}
            enter="transition ease-in-out duration-500 delay-200 order-first"
            enterFrom="opacity-0 scale-105"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in-out duration-100 absolute"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Image src={item.img} width={1024} height={270} alt={item.desc} />
          </Transition>
        ))}
      </div>

      {/* Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
