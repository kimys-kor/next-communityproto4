"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import NewIcon from "@/app/components/NewIcon";
import { getPostUrl, tabsCommunity } from "@/app/utils";
import { BoardItem } from "@/app/types";

type TabContent = {
  id: number;
  postType: number;
  username: string;
  nickname: string;
  userIp: string;
  title: string;
  thumbNail: string | null;
  hit: number;
  hate: number;
  likes: number;
  replyNum: number;
  createdDt: string;
  changedcreatedDt: string;
}[];

interface TabACommunityClientProps {
  initialTab: number;
  initialData: any[];
}

// Custom hook for screen size detection
const useResponsiveSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // `sm` breakpoint at 640px
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export const TabACommunityClient: React.FC<TabACommunityClientProps> = ({
  initialTab,
  initialData,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [tabContent, setTabContent] = useState<any[]>(initialData);
  const isMobile = useResponsiveSize();

  useEffect(() => {
    const fetchTabContent = async (typ: number, size: number) => {
      try {
        setTabContent([]);
        const response = await fetch(
          `/api/board/list?typ=${typ}&keyword=&page=0&size=${size}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 60 },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tab content");
        }

        const data = await response.json();
        let content = data.data.content;

        setTabContent(content);
      } catch (error) {
        toast.error("게시글리스트 데이터 문제가 발생했습니다");
      }
    };

    const typMap = [9, 10, 11, 12, 13];
    const typ = typMap[activeTab];
    const size = isMobile ? 8 : 10;

    fetchTabContent(typ, size);
  }, [activeTab, isMobile]);

  return (
    <article className="min-h-[266px] w-full truncate bg-white rounded-2xl flex flex-col gap-5 border border-solid border-gray-200">
      <div className="w-full flex flex-col">
        <div className="flex flex-wrap gap-1 p-2 bg-[#FAFAFA] rounded-t">
          {tabsCommunity.map((tab, index) => (
            <div
              key={index}
              className={`border-solid border rounded-md cursor-pointer font-medium text-sm px-2 py-1 text-center transition-all hover:bg-blue-100 hover:border-blue-400 hover:text-blue-600 whitespace-nowrap ${
                activeTab === index
                  ? "text-sky-700 border-sky-500 bg-sky-50"
                  : "text-gray-700 border-gray-300 bg-white"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex justify-center items-center gap-1">
                {tab.icon}
                <span className="whitespace-nowrap">{tab.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm w-full">
          {activeTab === 0 ? (
            <div className="grid grid-cols-4 gap-4 py-3">
              {(tabContent as TabContent).slice(0, 8).map((item) => (
                <Link
                  key={item.id}
                  href={`/community/${item.id}`}
                  className="flex flex-col justify-center items-center gap-2 px-2 hover:cursor-pointer"
                >
                  {item.thumbNail ? (
                    <Image
                      className="rounded-md h-28 w-full object-cover"
                      src={item.thumbNail}
                      width={100}
                      height={130}
                      alt={`photo content ${item.title}`}
                    />
                  ) : (
                    <div className="rounded-md h-28 w-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-500">No Image</span>
                    </div>
                  )}
                  <div className="text-center w-full flex flex-col justify-center">
                    <div className="text-sm truncate">{item.title}</div>
                    <div className="flex justify-center">
                      <span className="w-1/2 truncate text-xs text-gray-500">
                        {item.changedcreatedDt}
                      </span>
                      <span className="w-1/2 truncate text-xs text-gray-500">
                        {item.nickname}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            (tabContent as TabContent).map((item, index) => (
              <Link key={item.id} href={getPostUrl(item.postType, item.id)}>
                <div
                  className={`px-3 flex justify-between items-center hover:bg-slate-200 hover:cursor-pointer ${
                    item.id !== tabContent[tabContent.length - 1]?.id
                      ? "border-b border-dashed border-slate-200"
                      : ""
                  }`}
                >
                  <div className="flex gap-2 items-center py-2 w-full">
                    <div className="flex items-center gap-1 text-sm font-medium w-[80%] truncate">
                      <NewIcon />
                      <span className="truncate">{item.title}</span>
                    </div>
                    <span className="text-[10px] flex items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-blue"
                      >
                        <rect x="45" y="10" width="10" height="80" />
                        <rect x="10" y="45" width="80" height="10" />
                      </svg>
                      <span className="text-blue font-bold text-xs">
                        {item.replyNum}
                      </span>
                    </span>
                    <div className="w-[20%] truncate text-sm text-gray-600 flex justify-end">
                      <p>{item.nickname}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </article>
  );
};
