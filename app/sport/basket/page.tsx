import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "../(component)/SubMenu";
import BoardContainer from "@/app/components/boards/BoardContainer";
import Title from "@/app/components/Title";
import { pageData } from "@/app/data/pageData";
import { Metadata } from "next";

// 메타데이터 정의 (필요시 추가)
// export const metadata: Metadata = { ... };

export default function Page() {
  const breadcrumbItems = {
    title: "스포츠분석",
    subMenu: "국내외농구분석",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <Title
        title={pageData.sportBasket.title}
        description={pageData.sportBasket.description}
      />
      <SubMenu />
      <ThreeBanner />
      <div>
        <img
          className=""
          src="/images/main_top.jpg"
          alt={"메인 배너 이미지"}
          width={1024}
          height={177}
        />
      </div>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <h2 className="text-xl font-semibold mt-6 mb-3">국내외농구분석 게시글</h2>
      <BoardContainer typ={7} page={1} size={15} />
    </div>
  );
}
