import ThreeBanner from "@/app/components/ThreeBanner";
import Breadcrumb from "@/app/components/BreadCrumb";

import SubMenu from "./(component)/SubMenu";
import PhotoBoard from "../components/boards/PhotoBoard";

export default function Page() {
  const breadcrumbItems = {
    title: "커뮤니티",
    subMenu: "안구정화",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <SubMenu />
      <ThreeBanner />
      <img
        className=""
        src="/images/sportMain.png"
        width={1024}
        height={177}
        alt={"안구정화 logo"}
      />

      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <PhotoBoard postType={9} />
    </div>
  );
}
