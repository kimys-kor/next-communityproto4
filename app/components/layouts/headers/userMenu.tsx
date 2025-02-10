"use client";

import Avatar from "../../Avatar";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Profile from "../../Profile";
import { useAuthStore } from "@/app/globalStatus/useAuthStore";
import { useUserStore } from "@/app/globalStatus/useUserStore";
import { UserInfo } from "@/app/types";
import { refreshUserInfo } from "@/app/api/authAction";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { loggedIn, setLoggedIn } = useAuthStore();
  const { userInfo, setUserInfo } = useUserStore(); // Destructure userInfo from useUserStore
  const [loading, setLoading] = useState(true);

  // Memoized function to toggle the menu open/closed
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Memoized function to handle outside clicks
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    // Fetch user info only on initial mount (empty dependency array)
    const initializeUser = async () => {
      const data = await refreshUserInfo();
      if (data) {
        setLoggedIn(true);
        setUserInfo(data);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    };

    initializeUser();

    // Event listener for closing the menu when clicking outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
    };
  }, [handleClickOutside, setLoggedIn, setUserInfo]);

  // Only render Profile component if userInfo is available and loading is complete
  const renderProfile = !loading && userInfo && <Profile userInfo={userInfo} />;

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 md:py-2 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer"
        >
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="z-10 w-72 absolute bg-white overflow-hidden right-0 top-12 text-sm border border-solid border-gray-300">
          <div className="flex flex-col">
            {renderProfile}
            <Link href={"/myinfo"}>
              <div
                onClick={toggleOpen}
                className="px-4 py-3 hover:bg-neutral-100 text-lg font-medium text-center"
              >
                내정보수정
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
