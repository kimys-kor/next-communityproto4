import React from "react";
import PartnerCard from "./(components)/PartnerCard";
import Paging from "../components/Paging";
import ProgressSliderPage from "../components/ProgressSliderPage";
import Breadcrumb from "../components/BreadCrumb";

interface ImgContent {
  img: string;
  title: string;
  code: string;
}

function Page() {
  const breadcrumbItems = {
    title: "안전놀이터",
    subMenu: "안전놀이터",
  };

  return (
    <div className="flex flex-col max-w-[1200px] gap-3">
      <ProgressSliderPage />
      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <PartnerCard />
    </div>
  );
}

export default Page;
