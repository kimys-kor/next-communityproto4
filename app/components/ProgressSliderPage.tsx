import main_top from "/public/images/main_top.jpg";
import ProgressSlider from "./ProgressSlider";
import Image from "next/image";

export default function ProgressSliderPage() {
  const items = [
    {
      img: main_top.src,
      desc: "main_banner",
    },
    {
      img: main_top.src,
      desc: "main_banner",
    },
  ];

  return (
    <div className="relative h-32 md:h-48 flex flex-col justify-center bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto w-full h-full">
        <div className=" flex justify-center bg-[#F2F7FF] w-full h-full">
          {/* <ProgressSlider items={items} /> */}
          <Image
            src={main_top}
            className="w-full h-full object-contain"
            alt={"꽁머니팡 배너"}
          />
        </div>
      </div>
    </div>
  );
}
