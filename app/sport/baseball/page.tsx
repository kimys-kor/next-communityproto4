import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import sportMain from "/public/images/sportMain.png";
import Image from "next/image";
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
    subMenu: "KBO/NPB분석",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <Title
        title={pageData.sportBaseball.title}
        description={pageData.sportBaseball.description}
      />
      <SubMenu />
      <ThreeBanner />
      <div>
        <Image
          className=""
          src={sportMain}
          width={1024}
          height={177}
          alt={"스포츠분석"}
        />
      </div>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <h2 className="text-xl font-semibold mt-6 mb-3">KBO/NPB분석 게시글</h2>
      <BoardContainer typ={5} page={1} size={15} />
    </div>
  );
}
