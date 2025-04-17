import ThreeBanner from "@/app/components/ThreeBanner";
import sportMain from "/public/images/sportMain.png";
// import Image from "next/image"; // Image import 제거
import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "./(component)/SubMenu";
import BoardContainer from "@/app/components/boards/BoardContainer";
import { Metadata } from "next";

// 스포츠분석 페이지 메타데이터 정의
export const metadata: Metadata = {
  title: "스포츠분석 | 토토사이트 추천 토이소 - 해외축구, 야구, 농구 등",
  description:
    "토이소에서 제공하는 전문가들의 심층 스포츠분석 정보를 확인하세요. 해외축구, 국내야구, NBA 등 다양한 종목의 분석과 토토사이트 추천 정보를 제공합니다.",
  keywords: [
    "스포츠분석",
    "해외축구분석",
    "야구분석",
    "농구분석",
    "토토사이트",
    "토토사이트추천",
    "먹튀검증",
    "스포츠커뮤니티",
  ],
  // OpenGraph, Twitter 메타데이터도 필요시 추가
};

export default function Page() {
  const breadcrumbItems = {
    title: "스포츠분석",
    subMenu: "해외축구분석",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <h1 className="text-2xl font-bold my-4">전문가 스포츠분석</h1>
      <p className="text-gray-600 mb-4">
        토이소의 전문가들이 제공하는 다양한 종목의 심층 스포츠분석 정보를 통해
        경기 예측의 정확도를 높여보세요. 안전한 토토사이트 추천 정보도 함께
        확인하실 수 있습니다.
      </p>

      <SubMenu />
      <ThreeBanner />
      <img
        className=""
        src={sportMain.src}
        alt={"스포츠분석 메인 이미지"}
        width={1024}
        height={177}
      />

      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <h2 className="text-xl font-semibold mt-6 mb-3">해외축구분석 게시글</h2>
      <BoardContainer typ={2} page={1} size={15} />
    </div>
  );
}
