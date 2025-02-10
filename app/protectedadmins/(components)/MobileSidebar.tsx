"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { MdAddToHomeScreen } from "react-icons/md";
import { menuItems } from "@/app/utils";
import { useUserStore } from "@/app/globalStatus/useUserStore";

const MobileSidebar = React.memo(() => {
  const { userInfo } = useUserStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Memoize toggleSidebar function to prevent re-creation on each render
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="flex md:hidden items-center p-4 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
        <button onClick={toggleSidebar} className="p-2">
          <FiMenu size={24} />
        </button>
        <p className="ml-4 text-lg font-semibold">토이소 관리자</p>
      </header>

      <aside
        ref={sidebarRef}
        className={`fixed pt-[100px] top-0 left-0 h-full z-40 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 bg-gray-100 w-54 p-3 overflow-y-auto max-h-full`}
      >
        <div className="flex flex-col gap-2">
          <div className="bg-gray-100 rounded-lg p-4 h-full w-full max-w-full lg:max-w-xs overflow-y-auto">
            <ul className="text-lg font-medium space-y-2">
              <Link
                className="hover:text-blue px-2 text-base md:text-lg font-semibold flex items-center mb-4 lg:mb-6"
                href="/"
                onClick={toggleSidebar}
              >
                유저페이지
                <MdAddToHomeScreen className="w-5 h-5 ml-2" />
              </Link>
              {menuItems.map((item, index) => (
                <div key={index} className="mb-4">
                  <li className="truncate px-2 py-3 rounded-md bg-blue-500 text-black transition-colors text-base md:text-lg">
                    {item.name}
                  </li>
                  <ul className="mt-2 pl-4 space-y-1">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        href={subItem.link}
                        key={subIndex}
                        className="block w-full"
                        onClick={toggleSidebar}
                      >
                        <li className="truncate px-3 py-2 text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors text-sm md:text-base">
                          {subItem.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Hardcoded "마스터" section */}
              {userInfo?.sck === "asdasdfz12e5t185g8" && (
                <div className="mb-4">
                  <li className="truncate px-4 py-3 rounded-md bg-blue-500 text-black transition-colors text-base md:text-lg">
                    마스터
                  </li>
                  <ul className="mt-2 pl-4 space-y-1">
                    <Link
                      href="/protectedadmins/admin-members"
                      className="block w-full"
                      onClick={toggleSidebar}
                    >
                      <li className="truncate px-3 py-2 text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors text-sm md:text-base">
                        관리자아이디관리
                      </li>
                    </Link>
                    <Link
                      href="/protectedadmins/admin-log"
                      className="block w-full"
                      onClick={toggleSidebar}
                    >
                      <li className="truncate px-3 py-2 text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors text-sm md:text-base">
                        관리자활동히스토리
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
});

export default MobileSidebar;
