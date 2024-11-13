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
  title:
    "꽁머니팡: 토토사이트 토토사이트추천 먹튀사이트 먹튀폴리스 토토지노 가입머니 토토 토토꽁머니 토지노 꽁머니 먹튀검증 커뮤니티 안전놀이터 추천 배당흐름 분석 예상 정보 순위 모음",
  description:
    "꽁머니팡: 실시간 라이브스코어, 스포츠토토사이트, 꽁머니, 안전놀이터, 배당, 파워볼, 배당 흐름, 정보, 분석, 추천, 순위",
  keywords:
    "꽁머니팡: 꽁머니,먹튀검증,토토사이트,메이저놀이터,메이저사이트,안전한놀이터,먹튀사이트,프로토,승무패,스포츠토토,파워볼,배당,정보,순위,추천",
  authors: [{ name: "꽁머니팡" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName:
      "꽁머니팡: 토토사이트 추천 꽁머니 먹튀검증 커뮤니티 안전놀이터 추천 배당흐름 분석 예상 정보 순위 모음",
    title:
      "꽁머니팡: 토토사이트 추천 꽁머니 먹튀검증 커뮤니티 안전놀이터 추천 배당흐름 분석 예상 정보 순위 모음",
    description:
      "꽁머니팡: 실시간 라이브스코어, 스포츠토토사이트, 꽁머니, 안전놀이터, 배당, 파워볼, 배당 흐름, 정보, 분석, 추천, 순위",
    url: "https://ggongpang.com",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "꽁머니팡: 토토사이트 추천 꽁머니 먹튀검증 커뮤니티 안전놀이터 추천 배당흐름 분석 예상 정보 순위 모음",
    description:
      "꽁머니팡: 실시간 라이브스코어, 스포츠토토사이트, 꽁머니, 안전놀이터, 배당, 파워볼, 배당 흐름, 정보, 분석, 추천, 순위",
    creator: "꽁머니팡",
    images: [
      { 
        url: "/logo.png", 
      }
    ],
  },
  verification: {
    google: "zUrRPXRwKAbdVJVGGRQDBa7UPmpatqnQiTDF2rbypJc"
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
