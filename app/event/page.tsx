import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import Breadcrumb from "@/app/components/BreadCrumb";
import PhotoBoard from "../components/boards/PhotoBoard";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import SubMenu from "./(component)/SubMenu";
import Title from "@/app/components/Title";
import { pageData } from "@/app/data/pageData";
import { Metadata } from "next";

// 메타데이터 정의 (필요시 추가)
// export const metadata: Metadata = { ... };

function Page() {
  const breadcrumbItems = {
    title: "꽁머니팡",
    subMenu: "이벤트",
  };

  return (
    <div className="flex flex-col max-w-[1200px]">
      <Title
        title={pageData.event.title}
        description={pageData.event.description}
      />
      <SubMenu />
      <ThreeBanner></ThreeBanner>
      <ProgressSliderPage></ProgressSliderPage>
      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <PhotoBoard postType={14} />
    </div>
  );
}

export default Page;
