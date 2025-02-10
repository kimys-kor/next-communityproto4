"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Banner } from "@/app/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface BannerListProps {
  banners: Banner[];
}

function shuffleArray(array: Banner[]) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

const HomeBannerClient: React.FC<BannerListProps> = ({ banners }) => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (banners.length > 0) {
      const shuffledBanners = shuffleArray(banners);
      setBannerList(shuffledBanners);
    }
  }, [banners]);

  const handleBannerClick = useCallback(
    async (bannerId: number, partnerUrl: string) => {
      try {
        const response = await fetch(`/api/clickBanner?bannerId=${bannerId}`, {
          method: "GET",
        });

        if (response.ok) {
          const formattedUrl =
            partnerUrl.startsWith("http://") ||
            partnerUrl.startsWith("https://")
              ? partnerUrl
              : `https://${partnerUrl}`;

          window.location.href = formattedUrl;
        } else {
          toast.error("Failed to register banner click.");
        }
      } catch (error) {
        toast.error("Error occurred while opening the banner.");
      }
    },
    [] // 의존성 배열을 빈 배열로 설정하여 함수가 다시 생성되지 않도록 최적화
  );

  if (bannerList.length === 0) {
    return null; // 배너가 없으면 아무것도 렌더링하지 않음
  }

  return (
    <main className="w-full h-auto bg-white rounded-2xl flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {bannerList.map((banner) => (
          <li key={banner.id} className="grid-element">
            <Image
              src={banner.thumbNail}
              alt={banner.partnerName}
              width={318}
              height={133}
              className="w-full h-auto rounded-md object-cover cursor-pointer"
              onClick={() => handleBannerClick(banner.id, banner.partnerUrl)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomeBannerClient;
