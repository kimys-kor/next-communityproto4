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
  metadataBase: new URL("https://ggongpang.com"),
  title: "꽁머니팡: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
  author: "꽁머니팡: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
  description:
    "꽁머니팡은 꽁 머니 커뮤니티 먹튀검증 커뮤니티 입니다. 토토사이트, 먹튀 사이트, 안전놀이터, 파워볼, 스팟 정보를 제공합니다. 먹튀 검증 사이트에서 보증하고 추천하는 메이저 사이트를 확인하세요.",
  keywords:
    "꽁머니팡,꽁머니,먹튀검증,토토사이트,메이저놀이터,메이저사이트,안전한놀이터,먹튀사이트,프로토,승무패,스포츠토토,파워볼",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "꽁머니팡: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    title: "꽁머니팡: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    description:
      "꽁머니팡은 꽁 머니 커뮤니티 먹튀검증 커뮤니티 입니다. 토토사이트, 먹튀 사이트, 안전놀이터, 파워볼, 스팟 정보를 제공합니다. 먹튀 검증 사이트에서 보증하고 추천하는 메이저 사이트를 확인하세요.",
    keywords:
      "꽁머니팡,꽁머니,먹튀검증,토토사이트,메이저놀이터,메이저사이트,안전한놀이터,먹튀사이트,프로토,승무패,스포츠토토,파워볼",
    url: "https://ggongpang.com/",
    images: [
      {
        url: "https://ggongpang.com/icon.ico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    title: "꽁머니팡: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    description:
      "꽁머니팡은 꽁 머니커뮤니티 먹튀검증 커뮤니티 입니다. 토토사이트, 먹튀 사이트, 안전놀이터, 파워볼, 스팟 정보를 제공합니다. 먹튀 검증 사이트에서 보증하고 추천하는 메이저 사이트를 확인하세요.",
    keywords:
      "꽁머니팡,꽁머니,먹튀검증,토토사이트,메이저놀이터,메이저사이트,안전한놀이터,먹튀사이트,프로토,승무패,스포츠토토,파워볼",
    images: [
      {
        url: "https://ggongpang.com/icon.ico",
      },
    ],
    creator: "꽁머니팡: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
  },
  itemprop: {
    name: "꽁머니팡: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    description:
      "꽁머니팡은 꽁 머니커뮤니티 먹튀검증 커뮤니티 입니다. 토토사이트, 먹튀 사이트, 안전놀이터, 파워볼, 스팟 정보를 제공합니다. 먹튀 검증 사이트에서 보증하고 추천하는 메이저 사이트를 확인하세요.",
    keywords:
      "꽁머니팡,꽁머니,먹튀검증,토토사이트,메이저놀이터,메이저사이트,안전한놀이터,먹튀사이트,프로토,승무패,스포츠토토,파워볼",
    images: [
      {
        url: "https://ggongpang.com/icon.ico",
      },
    ],
  },
  verification: {
    google: "zUrRPXRwKAbdVJVGGRQDBa7UPmpatqnQiTDF2rbypJc",
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
