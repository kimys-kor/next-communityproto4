"use client";

import React, { useState, useEffect } from "react";
import { Banner } from "@/app/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import HomeBannerSk from "@/app/components/skeleton/HomeBannerSk";

function shuffleArray(array: Banner[]) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

const HomeBannerClient: React.FC = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBanners = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/banners");
        if (!response.ok) {
          throw new Error("Failed to fetch banners");
        }
        const data = await response.json();
        const bannersData = Array.isArray(data) ? data : data.data || [];
        const shuffledBanners = shuffleArray(bannersData);
        setBannerList(shuffledBanners);
      } catch (error) {
        console.error("Error fetching banners:", error);
        toast.error("배너를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

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

        window.open(formattedUrl, "_blank", "noopener,noreferrer");
      } else {
        toast.error("Failed to register banner click.");
      }
    } catch (error) {
      toast.error("Error occurred while opening the banner.");
    }
  };

  if (loading) {
    return <HomeBannerSk />;
  }

  if (bannerList.length === 0) {
    return null;
  }

  return (
    <main className="w-full h-auto bg-white rounded-2xl flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {bannerList.map((banner) => (
          <li key={banner.id} className="grid-element">
            <img
              loading="lazy"
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
