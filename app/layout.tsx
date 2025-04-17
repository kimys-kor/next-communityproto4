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
  metadataBase: new URL("https://ggongpang.com.com"),
  title: {
    default:
      "꽁머니팡 | 먹튀검증, 토토사이트추천, 꽁머니, 스포츠분석 스포츠커뮤니티",
    template: "%s | 꽁머니팡 - 안전한 토토사이트 추천 및 먹튀검증",
  },
  author: "꽁머니팡",
  description:
    "꽁머니팡은 안전한 토토사이트 추천과 확실한 먹튀검증 정보를 제공하는 대표 스포츠커뮤니티입니다. 최신 꽁머니 이벤트, 상세 스포츠분석 정보, 안전놀이터 목록을 확인하세요.",
  keywords:
    "꽁머니, 먹튀검증, 토토사이트, 토토사이트추천, 스포츠분석, 스포츠커뮤니티, 안전놀이터, 메이저사이트, 파워볼, 먹튀사이트, 토토, 프로토, 꽁머니팡",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "꽁머니팡 - 먹튀검증 토토사이트추천 스포츠커뮤니티",
    title:
      "꽁머니팡 | 먹튀검증, 토토사이트추천, 꽁머니, 스포츠분석 스포츠커뮤니티",
    description:
      "안전한 토토사이트추천, 확실한 먹튀검증은 스포츠커뮤니티 꽁머니팡에서! 꽁머니, 스포츠분석, 안전놀이터 정보를 한눈에 확인하세요.",
    url: "https://ggongpang.com.com/",
    images: [
      {
        url: "https://ggongpang.com.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "꽁머니팡 먹튀검증 토토사이트추천",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ggongpang.com",
    title:
      "꽁머니팡 | 먹튀검증, 토토사이트추천, 꽁머니, 스포츠분석 스포츠커뮤니티",
    description:
      "안전한 토토사이트추천, 확실한 먹튀검증은 스포츠커뮤니티 꽁머니팡에서! 꽁머니, 스포츠분석, 안전놀이터 정보를 한눈에 확인하세요.",
    images: ["https://ggongpang.com.com/twitter-image.png"],
    creator: "@ggongpang.com",
  },
  itemprop: {
    name: "꽁머니팡: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    description:
      "꽁머니팡은 꽁 머니커뮤니티 먹튀검증 커뮤니티 입니다. 토토사이트, 먹튀 사이트, 안전놀이터, 파워볼, 스팟 정보를 제공합니다. 먹튀 검증 사이트에서 보증하고 추천하는 메이저 사이트를 확인하세요.",
    keywords:
      "꽁머니팡,꽁머니,먹튀검증,토토사이트,메이저놀이터,메이저사이트,안전한놀이터,먹튀사이트,프로토,승무패,스포츠토토,파워볼",
    images: [
      {
        url: "https://ggongpang.com.com/icon.ico",
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
