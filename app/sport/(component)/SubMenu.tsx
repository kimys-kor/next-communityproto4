import { useMemo } from "react";
import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";
import SubMenuList from "@/app/components/SubMenuList";

function SubMenu() {
  // 메뉴 항목을 useMemo로 메모이제이션
  const menuItems = useMemo(
    () => [
      { href: "/sport", label: "해외축구분석", icon: SocIcon },
      { href: "/sport/asia", label: "아시아축구분석", icon: SocIcon },
      { href: "/sport/mlb", label: "MLB분석", icon: BaseIcon },
      { href: "/sport/baseball", label: "KBO/NPB분석", icon: BaseIcon },
      { href: "/sport/nba", label: "NBA분석", icon: BaskIcon },
      { href: "/sport/basket", label: "국내외농구분석", icon: BaskIcon },
      { href: "/sport/volley", label: "배구분석", icon: VolleyIcon },
    ],
    []
  ); // 의존성 배열이 빈 배열이면 메뉴 항목이 한 번만 생성됩니다.

  return <SubMenuList menuItems={menuItems} />;
}

export default SubMenu;
