import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";

import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "../community/(component)/SubMenu";
import BoardContainer from "@/app/components/boards/BoardContainer";
import MtcaseDescription1 from "./(components)/MtcaseDescription1";

function page() {
  const breadcrumbItems = {
    title: "먹튀사이트",
    subMenu: "먹튀사이트",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <SubMenu />
      {/* <ThreeBanner></ThreeBanner> */}
      <ProgressSliderPage></ProgressSliderPage>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <BoardContainer writeBoolean={true} typ={13} page={1} size={15} />
      <MtcaseDescription1 />
    </div>
  );
}

export default page;
