import { Inter } from "next/font/google";
import "./globals.css";

import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import ScrollButtons from "./components/ScrollButtons";
import localFont from "next/font/local";
import Head from "next/head";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata = {
  metadataBase: new URL("https://toiso777.com"),
  title:
    "토토사이트 모음 추천 베스트 TOP20 - 2025 안전놀이터 및 메이저 사이트 꽁머니 모음​ 가이드 토이소",
  author: "토이소: 먹튀검증 토토사이트 꽁머니 파워볼 커뮤니티 안전놀이터",
  description:
    "토이소에서는 안전놀이터, 메이저사이트, 꽁머니를 제공하는 토토사이트 TOP20을 추천합니다. 각 사이트의 특징과 안전성을 강조하여 사용자들에게 안전한 베팅 환경을 제공합니다. 먹튀검증과 보증된 사이트들을 확인해보세요.",
  keywords:
    "토이소, 토토사이트, 먹튀검증, 꽁머니, 안전놀이터, 메이저사이트, 파워볼, 스포츠토토, 먹튀사이트, 안전한놀이터, 베팅사이트, 추천토토사이트, TOP20, 2025, 메이저놀이터, 토토 추천, 안전토토, 먹튀검증업체",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "토이소: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    title:
      "토토사이트 모음 추천 베스트 TOP20 - 2025 안전놀이터 및 메이저 사이트 꽁머니 모음​ 가이드 토이소",
    description:
      "토이소에서는 안전놀이터, 메이저사이트, 꽁머니를 제공하는 토토사이트 TOP20을 추천합니다. 각 사이트의 특징과 안전성을 강조하여 사용자들에게 안전한 베팅 환경을 제공합니다. 먹튀검증과 보증된 사이트들을 확인해보세요.",
    keywords:
      "토이소, 토토사이트, 먹튀검증, 꽁머니, 안전놀이터, 메이저사이트, 파워볼, 스포츠토토, 먹튀사이트, 안전한놀이터, 베팅사이트, 추천토토사이트, TOP20, 2025, 메이저놀이터, 토토 추천, 안전토토, 먹튀검증업체",
    url: "https://toiso777.com/",
    images: [
      {
        url: "https://toiso777.com/icon.ico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    title:
      "토토사이트 모음 추천 베스트 TOP20 - 2025 안전놀이터 및 메이저 사이트 꽁머니 모음​ 가이드 토이소",
    description:
      "토이소에서는 안전놀이터, 메이저사이트, 꽁머니를 제공하는 토토사이트 TOP20을 추천합니다. 각 사이트의 특징과 안전성을 강조하여 사용자들에게 안전한 베팅 환경을 제공합니다. 먹튀검증과 보증된 사이트들을 확인해보세요.",
    keywords:
      "토이소, 토토사이트, 먹튀검증, 꽁머니, 안전놀이터, 메이저사이트, 파워볼, 스포츠토토, 먹튀사이트, 안전한놀이터, 베팅사이트, 추천토토사이트, TOP20, 2025, 메이저놀이터, 토토 추천, 안전토토, 먹튀검증업체",
    images: [
      {
        url: "https://toiso777.com/icon.ico",
      },
    ],
    creator: "토이소: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
  },
  itemprop: {
    name: "토이소: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    description:
      "토이소에서는 안전놀이터, 메이저사이트, 꽁머니를 제공하는 토토사이트 TOP20을 추천합니다. 각 사이트의 특징과 안전성을 강조하여 사용자들에게 안전한 베팅 환경을 제공합니다. 먹튀검증과 보증된 사이트들을 확인해보세요.",
    keywords:
      "토이소, 토토사이트, 먹튀검증, 꽁머니, 안전놀이터, 메이저사이트, 파워볼, 스포츠토토, 먹튀사이트, 안전한놀이터, 베팅사이트, 추천토토사이트, TOP20, 2025, 메이저놀이터, 토토 추천, 안전토토, 먹튀검증업체",
    images: [
      {
        url: "https://toiso777.com/icon.ico",
      },
    ],
  },
  verification: {
    google: "xRWqX_Q8wtpu3uUT3L6viXLG-zfw1euzL1nXmTMsIm0",
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <main className="pb-[10px]">
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          {children}
        </main>
        <ScrollButtons />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          </>
        )}
      </body>
    </html>
  );
}
