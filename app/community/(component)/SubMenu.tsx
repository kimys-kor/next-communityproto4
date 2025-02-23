import SubMenuList from "@/app/components/SubMenuList";

function SubMenu() {
  const menuItems = [
    {
      href: "/community",
      label: "안구정화",
      icon: "/images/icon/photoIgalIcon.png",
    },
    {
      href: "/community/humor",
      label: "유머&이슈",
      icon: "/images/icon/humor.png",
    },
    {
      href: "/community/pickster",
      label: "나는분석왕",
      icon: "/images/icon/analyze.png",
    },
    {
      href: "/community/free",
      label: "자유게시판",
      icon: "/images/icon/freeIcon.png",
    },
    {
      href: "/community/case",
      label: "피해사례",
      icon: "/images/icon/reasearch.png",
    },
  ];

  return <SubMenuList menuItems={menuItems} />;
}

export default SubMenu;
