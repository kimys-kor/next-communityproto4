import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";

import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "../(component)/SubMenu";
import BoardContainer from "@/app/components/boards/BoardContainer";
import Title from "@/app/components/Title";
import { pageData } from "@/app/data/pageData";
import { Metadata } from "next";

// 메타데이터 정의 (필요시 추가)
// export const metadata: Metadata = { ... };

function Page({ searchParams }: { searchParams?: { page?: string } }) {
  // page 쿼리 파라미터 가져오기 (기본값 1)
  const currentPage = Number(searchParams?.page) || 1;

  const breadcrumbItems = {
    title: "커뮤니티",
    subMenu: "자유게시판",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <Title
        title={pageData.communityFree.title}
        description={pageData.communityFree.description}
      />
      <SubMenu />
      <ThreeBanner></ThreeBanner>
      <ProgressSliderPage></ProgressSliderPage>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <h2 className="text-xl font-semibold mt-6 mb-3">자유게시판 게시글</h2>
      <BoardContainer
        writeBoolean={true}
        typ={12}
        page={currentPage}
        size={15}
      />
    </div>
  );
}

export default Page;
