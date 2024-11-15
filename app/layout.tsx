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
  title: "꽁머니팡: 토토사이트 추천 및 스포츠 분석",
  description:
    "꽁머니팡에서 실시간 라이브스코어와 안전한 토토사이트 정보를 확인하세요. 다양한 스포츠 분석과 최신 이벤트 소식을 제공합니다.",
  keywords:
    "꽁머니팡, 토토사이트, 스포츠분석, 안전놀이터, 먹튀검증, 라이브스코어, 꽁머니, 배당흐름, 커뮤니티",
  authors: [{ name: "꽁머니팡" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "꽁머니팡: 스포츠 분석 및 커뮤니티",
    title: "꽁머니팡: 토토사이트 추천 및 스포츠 분석",
    description:
      "안전한 토토사이트 추천, 실시간 스포츠 분석, 먹튀검증 커뮤니티를 꽁머니팡에서 만나보세요.",
    url: "https://ggongpang.com",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "꽁머니팡: 토토사이트 추천 및 스포츠 분석",
    description:
      "안전한 토토사이트 추천, 실시간 스포츠 분석, 먹튀검증 커뮤니티를 꽁머니팡에서 만나보세요.",
    creator: "꽁머니팡",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
  verification: {
    google: "zUrRPXRwKAbdVJVGGRQDBa7UPmpatqnQiTDF2rbypJc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              name: "꽁머니팡",
              url: "https://ggongpang.com",
              description:
                "안전한 토토사이트 추천과 스포츠 분석 커뮤니티를 제공합니다.",
              inLanguage: "ko",
            }),
          }}
        />
      </Head>
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
