import main_top from "/public/images/main_top.png";
import ProgressSlider from "./ProgressSlider";
// import Image from "next/image"; // Image import 제거

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
    // 이전에 추가했던 부모 div 스타일 제거
    <div className="relative h-32 md:h-48 flex flex-col justify-center bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto py-3">
        <div className="mt-3 flex justify-center bg-[#F2F7FF]">
          {/* <ProgressSlider items={items} /> */}
          {/* Image 컴포넌트를 img 태그로 변경, width/height 사용 */}
          <img
            src={main_top.src}
            width={1024}
            height={270}
            alt={"토이소 배너"}
          />
        </div>
      </div>
    </div>
  );
}
