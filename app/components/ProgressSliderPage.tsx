import main_top from "/public/images/main_top.png";
import ProgressSlider from "./ProgressSlider";
import Image from "next/image";

export default function ProgressSliderPage() {
  const items = [
    {
      img: main_top.src, // .src로 경로를 가져옴
      desc: "main_banner",
    },
    {
      img: main_top.src, // .src로 경로를 가져옴
      desc: "main_banner",
    },
  ];

  return (
    <div className="relative h-32 md:h-48 flex flex-col justify-center bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto py-3 w-full h-full">
        <div className="mt-3 flex justify-center bg-[#F2F7FF] w-full h-full relative">
          {/* <ProgressSlider items={items} /> */}
          <Image
            src={main_top}
            alt={"토이소 배너"}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
