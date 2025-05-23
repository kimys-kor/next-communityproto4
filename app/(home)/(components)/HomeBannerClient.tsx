"use client";

import React, { useState, useEffect } from "react";
import { Banner } from "@/app/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

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
    const shuffledBanners = shuffleArray(banners);
    setBannerList(shuffledBanners);
  }, [banners]);

  const handleBannerClick = async (bannerId: number, partnerUrl: string) => {
    try {
      const response = await fetch(`/api/clickBanner?bannerId=${bannerId}`, {
        method: "GET",
      });

      if (response.ok) {
        const formattedUrl =
          partnerUrl.startsWith("http://") || partnerUrl.startsWith("https://")
            ? partnerUrl
            : `https://${partnerUrl}`;

        window.location.href = formattedUrl;
      } else {
        toast.error("Failed to register banner click.");
      }
    } catch (error) {
      toast.error("Error occurred while opening the banner.");
    }
  };

  if (bannerList.length === 0) {
    return null;
  }

  return (
    <main className="w-full h-auto bg-white rounded-2xl flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {bannerList.map((banner) => {
          console.log(
            `Banner: ${banner.partnerName}, URL: ${banner.thumbNail}`
          );
          return (
            <li key={banner.id} className="grid-element relative aspect-video">
              <Image
                src={banner.thumbNail}
                alt={banner.partnerName}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="rounded-md cursor-pointer object-cover"
                onClick={() => handleBannerClick(banner.id, banner.partnerUrl)}
                unoptimized={banner.thumbNail?.toLowerCase().endsWith(".gif")}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomeBannerClient;
