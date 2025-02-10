"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { Banner } from "@/app/types";
import toast from "react-hot-toast";

interface ThreeBannerClientProps {
  banners: Banner[];
}

const ThreeBannerClient: React.FC<ThreeBannerClientProps> = ({ banners }) => {
  // handleBannerClick 함수 메모이제이션
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
    []
  );

  return (
    <section className="mt-3 w-full h-auto shadow-md flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 lg:grid-cols-3">
        {banners.map((banner, index) => (
          <BannerItem
            key={banner.id}
            banner={banner}
            index={index}
            onClick={handleBannerClick}
          />
        ))}
      </ul>
    </section>
  );
};

const BannerItem: React.FC<{
  banner: Banner;
  index: number;
  onClick: (bannerId: number, partnerUrl: string) => void;
}> = React.memo(({ banner, index, onClick }) => {
  const handleClick = () => {
    onClick(banner.id, banner.partnerUrl);
  };

  return (
    <li className={index === 2 ? "hidden lg:block" : ""}>
      <Image
        src={banner.thumbNail}
        alt={banner.partnerName}
        width={234}
        height={98}
        className="w-full h-auto cursor-pointer"
        onClick={handleClick}
      />
    </li>
  );
});

export default ThreeBannerClient;
