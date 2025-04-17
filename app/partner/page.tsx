import React from "react";
import PartnerCard from "./(components)/PartnerCard";
import Paging from "../components/Paging";
import ProgressSliderPage from "../components/ProgressSliderPage";
import Breadcrumb from "../components/BreadCrumb";
import Title from "@/app/components/Title";
import { pageData } from "@/app/data/pageData";

interface ImgContent {
  img: string;
  title: string;
  code: string;
}

function Page() {
  const breadcrumbItems = {
    title: "꽁머니팡",
    subMenu: "파트너",
  };

  return (
    <div className="flex flex-col max-w-[1200px] gap-3">
      <Title
        title={pageData.partner.title}
        description={pageData.partner.description}
      />
      <ProgressSliderPage />
      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <PartnerCard />
    </div>
  );
}

export default Page;
