import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "./(component)/SubMenu";
import BoardContainer from "@/app/components/boards/BoardContainer";
import Direction from "./(component)/Directionnormal";
import Title from "@/app/components/Title";
import { pageData } from "@/app/data/pageData";

function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = Number(searchParams?.page) || 1;

  const breadcrumbItems = {
    title: "홍보센터",
    subMenu: "일반홍보",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <Title
        title={pageData.promotion.title}
        description={pageData.promotion.description}
      />
      <SubMenu />
      <ThreeBanner></ThreeBanner>
      <ProgressSliderPage></ProgressSliderPage>
      {/* <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb> */}
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <h2 className="text-xl font-semibold mt-6 mb-3">토토사이트 홍보</h2>
      <BoardContainer
        writeBoolean={true}
        typ={16}
        page={currentPage}
        size={15}
      />
      <Direction />
    </div>
  );
}

export default Page;
