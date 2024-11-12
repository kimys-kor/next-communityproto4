export const GA_CTA_EVENTS = {
    onClickBottomBannerCTA: "click_cta_bottom_banner",
    onClickListeningCTA: "click_cta_listening",
    onClickNavigationCTA: "click_cta_navigation",
    onClickGuideCTA: "click_cta_guide",
    onClickAppDownloadCTA: "click_cta_app_download",
  } as const;
  
  export type GA_CTA_EVENT = typeof GA_CTA_EVENTS[keyof typeof GA_CTA_EVENTS];