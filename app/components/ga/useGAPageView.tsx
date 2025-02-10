"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function useGAPageView() {
  const pathname = usePathname(); // 현재 페이지 경로를 가져온다.

  useEffect(() => {
    // 비동기 작업을 할 경우, 컴포넌트가 마운트되지 않은 경우 이벤트를 보내지 않도록 함
    let isMounted = true;

    const sendPageViewEvent = async () => {
      if (isMounted) {
        await sendGAEvent("page_view", { page_path: pathname });
      }
    };

    sendPageViewEvent();

    // 컴포넌트가 언마운트될 때 isMounted를 false로 설정하여,
    // 더 이상 비동기 작업이 완료된 후 이벤트를 보내지 않도록 함
    return () => {
      isMounted = false;
    };
  }, [pathname]); // pathname이 변경될 때마다 useEffect 훅이 실행된다.

  return null;
}

export function GAPageView() {
  useGAPageView(); // useGAPageView 훅을 호출하여 페이지뷰 이벤트를 전송한다.
  return null;
}
