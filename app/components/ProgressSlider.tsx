"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface SliderItem {
  img: string;
  desc: string;
}

interface ProgressSliderProps {
  items: SliderItem[];
}

const ProgressSlider: React.FC<ProgressSliderProps> = ({ items }) => {
  const [progress, setProgress] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => {
      setProgress(0); // Reset progress when slide changes
    },
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "10px" }}>
        <ul style={{ margin: "0px" }}>
          {dots}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              height: "4px",
              background: "blue",
              width: `${progress}%`,
              transition: "width 0.1s linear",
            }}
          />
        </ul>
      </div>
    ),
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        // Assuming autoplaySpeed is 3000ms
        const diff = 100 / (3000 / 100); // Calculate progress increment per 100ms
        return Math.min(oldProgress + diff, 100);
      });
    }, 100); // Update progress every 100ms

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} style={{ outline: "none" }}>
          <Image
            src={item.img}
            width={1024}
            height={270}
            alt={item.desc}
            priority={index === 0}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ProgressSlider;
