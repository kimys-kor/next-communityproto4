import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "../(component)/SubMenu";
import BoardContainer from "@/app/components/boards/BoardContainer";
import Direction from "../(component)/Directionggong";
import { Metadata } from "next";

// 꽁머니 페이지 메타데이터 정의
export const metadata: Metadata = {
  title: "꽁머니 이벤트 | 토토사이트 추천 꽁머니팡 - 최신 꽁머니 정보 확인",
  description:
    "꽁머니팡에서 제공하는 최신 꽁머니 이벤트 정보를 확인하세요. 다양한 토토사이트의 꽁머니 혜택과 안전한 토토사이트 추천 정보를 얻어가세요.",
  keywords: [
    "꽁머니",
    "꽁머니이벤트",
    "꽁머니홍보",
    "토토사이트",
    "토토사이트추천",
    "신규가입꽁머니",
    "먹튀검증",
    "스포츠커뮤니티",
  ],
  // OpenGraph, Twitter 메타데이터도 필요시 추가
};

function Page({ searchParams }: { searchParams?: { page?: string } }) {
  // page 쿼리 파라미터 가져오기 (기본값 1)
  const currentPage = Number(searchParams?.page) || 1;

  const breadcrumbItems = {
    title: "홍보센터",
    subMenu: "꽁머니홍보",
  };
  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <h1 className="text-2xl font-bold my-4">최신 꽁머니 이벤트 정보</h1>
      <p className="text-gray-600 mb-4">
        다양한 토토사이트에서 진행하는 최신 꽁머니 이벤트 정보를 한눈에 확인하고
        참여해보세요. 꽁머니팡가 추천하는 안전한 토토사이트의 특별한 혜택을
        놓치지 마세요.
      </p>

      <SubMenu />
      <ThreeBanner></ThreeBanner>
      <ProgressSliderPage></ProgressSliderPage>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <h2 className="text-xl font-semibold mt-6 mb-3">꽁머니 홍보 게시판</h2>
      <BoardContainer
        writeBoolean={true}
        typ={17}
        page={currentPage}
        size={15}
      />
      <Direction />
    </div>
  );
}

export default Page;
