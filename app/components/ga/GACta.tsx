"use client";

import { GA_CTA_EVENT } from "@/lib/constants";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { useCallback } from "react";

type GAButtonProps = {
  children: React.ReactNode;
  eventLabel: GA_CTA_EVENT;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function GACta({
  children,
  className,
  eventLabel,
  onClick,
  ...rest
}: GAButtonProps) {
  // handleClick 함수 메모이제이션
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      sendGAEvent("event", eventLabel); // GA4에 이벤트 전송
      sendGTMEvent("event", eventLabel); // GTM에 이벤트 전송
      if (onClick) {
        onClick(e);
      }
    },
    [eventLabel, onClick] // eventLabel, onClick이 변경될 때만 새로 생성
  );

  return (
    <button
      type="button"
      onClick={handleClick} // 메모이제이션된 handleClick 사용
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}
