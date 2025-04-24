"use client";

import Image from "next/image";
import React from "react";
import { Banner } from "@/app/types";
import toast from "react-hot-toast";

interface ThreeBannerClientProps {
  banners: Banner[];
}

const ThreeBannerClient: React.FC<ThreeBannerClientProps> = ({ banners }) => {
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

  return (
    <section className="mt-3 w-full h-auto shadow-md flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 lg:grid-cols-3">
        {banners.map((banner, index) => (
          <li
            key={banner.id}
            className={`${index === 2 ? "hidden lg:block" : ""} relative`}
          >
            <Image
              src={banner.thumbNail}
              alt={banner.partnerName}
              width={318}
              height={133}
              className="rounded-md object-cover cursor-pointer"
              onClick={() => handleBannerClick(banner.id, banner.partnerUrl)}
              unoptimized={banner.thumbNail?.toLowerCase().endsWith(".gif")}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ThreeBannerClient;
