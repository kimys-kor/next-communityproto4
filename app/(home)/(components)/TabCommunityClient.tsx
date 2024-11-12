"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import NewIcon from "@/app/components/NewIcon";
import { tabsCommunity } from "@/app/utils";
import { BoardItem } from "@/app/types";

type TabContent = {
  id: number;
  title: string;
  img: string;
  date: string;
  nickname: string;
  thumbNail: string;
  changedcreatedDt: string;
  replyNum: number;
}[];

interface TabACommunityClientProps {
  initialTab: number;
  initialData: any[];
}

export const TabACommunityClient: React.FC<TabACommunityClientProps> = ({
  initialTab,
  initialData,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [tabContent, setTabContent] = useState<any[]>(initialData);

  useEffect(() => {
    const fetchTabContent = async (typ: number, size: number) => {
      try {
        setTabContent([]);

        const response = await fetch(
          `/api/board/list?typ=${typ}&keyword=&page=0&size=${size}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tab content");
        }

        const data = await response.json();
        let content = data.data.content;

        setTabContent(content);
      } catch (error) {
        toast.error("서버에 문제가 발생했습니다");
      }
    };

    const typMap = [9, 10, 11, 13];
    const typ = typMap[activeTab];
    const size = activeTab === 0 ? 4 : 5;

    fetchTabContent(typ, size);
  }, [activeTab]);

  return (
    <div className="truncate w-full bg-white rounded-2xl flex flex-col gap-5 border border-solid border-gray-200">
      <div className="w-full flex flex-col">
        {/* Tab buttons */}
        <div className="h-12 px-3 flex justify-start items-center gap-1 rounded-t bg-[#FAFAFA]">
          {tabsCommunity.map((tab, index) => (
            <div
              key={index}
              className={`border-solid border rounded-2xl cursor-pointer font-semibold text-sm px-2 py-1 transition-all hover:text-blue ${
                activeTab === index
                  ? "text-blue border-blue bg-[#F2F5FF]"
                  : "text-[#999999] border-[#999999]"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex justify-center items-center gap-1">
                {tab.icon}
                {tab.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tab content */}
        <div className="text-sm w-full">
        {activeTab === 0 ? (
            <div className="grid grid-cols-4 py-3">
              {(tabContent as TabContent).map((item) => (
                <Link
                  key={item.id}
                  href={`/community/${item.id}`}
                  className="flex flex-col justify-evenly items-center gap-2 px-2 hover:cursor-pointer"
                >
                  <Image
                    className="rounded-md h-20 sm:h-28"
                    src={item.thumbNail}
                    width={100}
                    height={130}
                    alt={`photo content ${item.title}`}
                  />
                  <div className="text-center w-full">
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
              <div
                key={item.id}
                className={`w-full h-10 px-3 gap-3 flex justify-between items-center transition-all ${
                  index !== tabContent.length - 1 ? "border-b border-dashed border-slate-200" : ""
                } hover:bg-slate-100`}
              >
                <div className="flex gap-1 items-center flex-1 overflow-hidden">
                  <NewIcon />
                  <Link href={`/community/${item.id}`} className="flex-1 min-w-0">
                    <p className="truncate text-sm cursor-pointer hover:underline">
                      {item.title}
                    </p>
                  </Link>
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
                    <span className="text-blue font-bold text-xs">{item.replyNum}</span>
                  </span>
                </div>
                <p className="text-sm w-14 text-right">{item.nickname}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};