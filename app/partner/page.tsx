import PartnerCard from "./(components)/PartnerCard";
import ProgressSliderPage from "../components/ProgressSliderPage";
import Breadcrumb from "../components/BreadCrumb";
import PartnerDescription1 from "./(components)/PartnerDescription1";

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
      <PartnerDescription1 />
    </div>
  );
}

export default Page;
