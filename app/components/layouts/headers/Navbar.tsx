"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import partnerIcon from "/public/images/partnerIcon.png";
import sportIcon from "/public/images/sportIcon.png";
import commuIcon from "/public/images/commuIcon.png";
import dangerIcon from "/public/images/dangerIcon.png";
import searchIcon from "/public/images/searchIcon.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "@/app/components/layouts/Sidebar";

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useEffect 최적화: pathname만 의존성으로 설정하여 불필요한 리렌더링을 방지
  useEffect(() => {
    if (typeof window !== "undefined" && pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  // 링크 데이터 메모이제이션: links 객체는 렌더링마다 동일하게 유지
  const links = useMemo(
    () => [
      // {
      //   href: "/muktui",
      //   label: "먹튀검증",
      //   icon: (
      //     <Image src={dangerIcon} width={30} height={30} alt="dangerIcon" />
      //   ),
      //   dropdown: [
      //     { href: "/muktui", label: "먹튀사이트" },
      //     { href: "/muktui/report", label: "먹튀신고" },
      //   ],
      // },
      {
        href: "/partner",
        label: "파트너",
        icon: (
          <Image src={partnerIcon} width={33} height={33} alt="partnerIcon" />
        ),
      },
      {
        href: "/sport",
        label: "스포츠분석",
        dropdown: [
          { href: "/sport", label: "해외축구분석" },
          { href: "/sport/asia", label: "아시아축구분석" },
          { href: "/sport/mlb", label: "MLB분석" },
          { href: "/sport/baseball", label: "KBO/NPB분석" },
          { href: "/sport/nba", label: "NBA분석" },
          { href: "/sport/basket", label: "국내외농구분석" },
          { href: "/sport/volley", label: "배구분석" },
        ],
        icon: <Image src={sportIcon} width={33} height={33} alt="sportIcon" />,
      },
      {
        href: "/community",
        label: "커뮤니티",
        dropdown: [
          { href: "/community", label: "안구정화" },
          { href: "/community/humor", label: "유머 & 이슈" },
          { href: "/community/pickster", label: "나는분석왕" },
          { href: "/community/free", label: "자유게시판" },
          { href: "/community/case", label: "먹튀피해제보" },
        ],
        icon: <Image src={commuIcon} width={33} height={33} alt="commuIcon" />,
      },
      {
        href: "/event",
        label: "이벤트",
        dropdown: [{ href: "/event", label: "이벤트" }],
      },
      {
        href: "/promotion",
        label: "홍보센터",
        dropdown: [
          { href: "/promotion", label: "일반홍보" },
          { href: "/promotion/ggong", label: "꽁머니홍보" },
          { href: "/promotion/hunting", label: "구인구직" },
        ],
      },
      {
        href: "/guide",
        label: "가이드",
        dropdown: [
          { href: "/guide/ggong", label: "꽁머니" },
          { href: "/guide/major", label: "메이저" },
          { href: "/guide/safe", label: "안전놀이터" },
        ],
      },
      {
        href: "/customer",
        label: "고객센터",
        dropdown: [
          { href: "/customer", label: "공지사항" },
          { href: "/customer/qalist", label: "1:1 문의" },
        ],
      },
    ],
    []
  );

  // onClick 핸들러 함수 최적화: useCallback으로 메모이제이션
  const handleLinkClick = useCallback((path: string) => {
    setActiveLink(path);
    setSidebarOpen(false); // 사이드바를 닫음
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // 사이드바 열기/닫기 토글
  };

  const isActiveLink = (link: string) => {
    return activeLink === link || activeLink.startsWith(link);
  };

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-full px-1">
        <ul className="flex w-full rounded-lg text-center pl-1">
          <li className="w-5 h-14 md:h-16 relative group cursor-pointer flex flex-col justify-center items-center box-border">
            <AiOutlineMenu
              size={20}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          </li>
          {links.map((link, index) => (
            <li
              key={index}
              className="h-14 md:h-16 relative group cursor-pointer flex flex-col justify-center items-center box-border"
            >
              <Link
                href={link.href}
                className={`relative 
                  w-20 md:w-28 lg:w-32
                   h-14 md:h-16 truncate text-lg cursor-pointer transition-all flex justify-center items-center gap-1 duration-300 ease-in-out menu-hover hover:text-blue ${isActiveLink(link.href) ? "text-blue" : "text-black"}`}
                onClick={() => handleLinkClick(link.href)}
              >
                <div className="font-bold">{link.label}</div>
                <div>{link.icon ? link.icon : null}</div>
              </Link>
              <ul className="border border-t border-red-text-blue">
                {link.dropdown && (
                  <li className="w-24 lg:w-32 left-[0px] invisible absolute z-50 flex flex-col bg-white text-black shadow-xl group-hover:visible">
                    {link.dropdown.map((sublink, index) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className={`outline-white w-full block p-2 text-base lg:text-base hover:bg-gray-700 hover:text-white truncate
                        ${index === link.dropdown.length - 1 ? "" : "border-b border-solid border-slate-200"}`}
                        onClick={() => handleLinkClick(sublink.href)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden w-full bg-blue font-medium text-sm text-white overflow-hidden">
        <div className="flex flex-wrap">
          <div className="flex flex-wrap items-center pl-3 divide-x divide-gray-300 w-full">
            <div
              className="cursor-pointer px-2 h-[48px] py-2 flex items-center justify-center transition-colors duration-200 hover:bg-indigo-600 hover:text-white"
              onClick={toggleSidebar}
            >
              <AiOutlineMenu size={15} />
            </div>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`flex-1 h-[48px] py-2 flex items-center justify-center transition-colors duration-200 hover:bg-indigo-600 hover:text-white`}
                style={{
                  minWidth: link.icon ? "100px" : "70px",
                  maxWidth: "25%",
                }}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
                <div>{link.icon ? link.icon : null}</div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Navbar;
