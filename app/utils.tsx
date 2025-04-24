import Link from "next/link";
import {
  FaFootballBall,
  FaBaseballBall,
  FaBasketballBall,
  FaVolleyballBall,
  FaCameraRetro,
  FaLaugh,
  FaCrown,
  FaComment,
  FaExclamationTriangle,
} from "react-icons/fa";
import Image from "next/image";

import { Banner, BoardItem, Member, MemberDataResponse } from "./types";
import { BoardItem2 } from "./types";

export const categoryMap: { [key: number]: string } = {
  2: "축구분석",
  3: "축구분석",
  4: "야구분석",
  5: "야구분석",
  6: "농구분석",
  7: "농구분석",
  8: "배구분석",
  9: "안구정화",
  10: "유머이슈",
  11: "나는분석왕",
  12: "자유게시판",
  13: "피해사례",
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const today = new Date();
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  if (isToday) {
    return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  } else {
    return `${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  }
};

export const formatNew = (createdDt: string): boolean => {
  const itemDate = new Date(createdDt);
  const now = new Date();
  const diffInHours = (now.getTime() - itemDate.getTime()) / (1000 * 60 * 60);

  return diffInHours <= 24;
};

export const fetchInitialBoardListData = async (
  typ: number,
  page: number,
  size: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/list?typ=${typ}&keyword=&page=${page}&size=${size}`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch initial data");
    }

    const data = await response.json();
    const { content, totalElements } = data.data;

    const formattedContent = content.map((item: any) => ({
      ...item,
      isNew: formatNew(item.createdDt.toString()) || false,
      changedcreatedDt: formatDate(item.createdDt.toString()),
    }));

    return {
      content: formattedContent as BoardItem[],
      totalElements,
      page,
      size,
    };
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return {
      content: [],
      totalElements: 0,
      page: 0,
      size: 0,
    };
  }
};

export async function fetchInitialPhotoData(postType: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/photoList?postType=${postType}&page=0&size=12`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch initial photo data");
    }

    const data = await response.json();
    const { content, totalElements, totalPages } = data.data;

    const formattedContent = content.map((item: any) => ({
      ...item,
      changedcreatedDt: formatDate(item.createdDt.toString()),
    }));

    return {
      boardList: formattedContent,
      totalElements,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching initial photo data:", error);
    return {
      boardList: [],
      totalElements: 0,
      totalPages: 0,
    };
  }
}

export const fetchInitialCommunityTabData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/guest/list?typ=9&keyword=&page=0&size=4`,
    { method: "GET", next: { revalidate: 60 } }
  );
  const data = await response.json();
  return data.data.content;
};

export async function fetchInitialAnalyzeData(typ: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/list?typ=${typ}&keyword=&page=0&size=5`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch initial data");
    }

    const data = await response.json();
    return data.data.content as BoardItem[];
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return [];
  }
}

export async function fetchHomeBanner(): Promise<Banner[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/bannerlist`,
      {
        method: "GET",
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch banner list");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching banner content:", error);
    return [];
  }
}

export async function fetchThreeBanner(): Promise<Banner[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/threeBannerlist`,
      {
        method: "GET",
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch banner list");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching banner content:", error);
    return [];
  }
}

export async function fetchBoardDayContent(
  // period: string = "day",
  // period: string = "week",
  period: string = "month",
  page: number = 0,
  size: number = 6
): Promise<BoardItem2[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/bestList?period=${period}&page=${page}&size=${size}`,
      {
        method: "GET",
        credentials: "include",
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch best board list");
    }

    const data = await response.json();
    return data.data.content;
  } catch (error) {
    console.error("Error fetching board content:", error);
    return [];
  }
}

export async function fetchBoardWeekContent(
  period: string = "week",
  page: number = 0,
  size: number = 6
): Promise<BoardItem2[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/bestList?period=${period}&page=${page}&size=${size}`,
      {
        method: "GET",
        credentials: "include",
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch best board list");
    }

    const data = await response.json();
    return data.data.content;
  } catch (error) {
    console.error("Error fetching board content:", error);
    return [];
  }
}

export async function fetchInitialPartnerData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/guest/partnerList?page=0&size=12`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch initial partner content");
  }

  const data = await response.json();
  return {
    boardList: data.data.content,
    totalElements: data.data.totalElements,
    totalPages: data.data.totalPages,
  };
}

export const fetchInitialBoardContent = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/content?boardId=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch board content");
    }

    const data = await res.json();
    if (data.status !== "OK" || !data.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching board content:", error);
    return null;
  }
};

export const fetchInitialComments = async (
  boardId: string,
  page: number,
  size: number
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/guest/list/comment?boardId=${boardId}&page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  const data = await res.json();
  if (data.status !== "OK" || !data.data) {
    return null;
  }

  return data.data;
};

export async function fetchInitialMemberData(
  page: number = 0,
  size: number = 15,
  keyword: string = ""
): Promise<{
  content: Member[];
  totalElements: number;
  page: number;
  size: number;
  error?: boolean;
}> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/user/findall?page=${page}&size=${size}&keyword=${encodeURIComponent(keyword)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch member data:", await response.text());
      return { content: [], totalElements: 0, page, size, error: true };
    }

    const responseData: MemberDataResponse = await response.json();
    return {
      content: responseData.data.content,
      totalElements: responseData.data.totalElements,
      page: responseData.data.pageable.pageNumber,
      size: responseData.data.pageable.pageSize,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { content: [], totalElements: 0, page, size, error: true };
  }
}

export const getPostUrl = (postType: number, id: number): string => {
  switch (postType) {
    case 1:
      return `/partner/${id}`;
    case 2:
      return `/sport/${id}`;
    case 3:
      return `/sport/asia/${id}`;
    case 4:
      return `/sport/mlb/${id}`;
    case 5:
      return `/sport/baseball/${id}`;
    case 6:
      return `/sport/nba/${id}`;
    case 7:
      return `/sport/basket/${id}`;
    case 8:
      return `/sport/volley/${id}`;
    case 9:
      return `/community/${id}`;
    case 10:
      return `/community/humor/${id}`;
    case 11:
      return `/community/pickster/${id}`;
    case 12:
      return `/community/free/${id}`;
    case 13:
      return `/community/case/${id}`;
    case 14:
      return `/event/${id}`;
    case 15:
      return `/unknown/${id}`;
    case 16:
      return `/promotion/${id}`;
    case 17:
      return `/promotion/ggong/${id}`;
    case 18:
      return `/promotion/hunting/${id}`;
    case 19:
      return `/customer/${id}`;
    case 20:
      return `/customer/qalist/${id}`;
    default:
      return `/unknown/${id}`;
  }
};

export const tabsCommunity = [
  {
    label: "안구정화",
    typ: 9,
    icon: (
      <Image
        src="/images/icon/photoIcon.png"
        width={20}
        height={20}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "유머 & 이슈",
    typ: 10,
    icon: (
      <Image
        src="/images/icon/event.png"
        width={20}
        height={20}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "나는분석왕",
    typ: 11,
    icon: (
      <Image
        src="/images/icon/gameIcon.png"
        width={20}
        height={20}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "자유게시판",
    typ: 12,
    icon: (
      <Image
        src="/images/icon/freeBoardIcon.png"
        width={20}
        height={20}
        alt="freeBoardIcon"
      />
    ),
  },
  {
    label: "피해사례",
    typ: 13,
    icon: (
      <Image
        src="/images/icon/analyze.png"
        width={20}
        height={20}
        alt="menuIcon"
      />
    ),
  },
];

export const tabsAnalyze = [
  {
    label: "해외축구분석",
    icon: (
      <Image
        src="/images/icon/Msoccer.png"
        width={14}
        height={14}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "아시아축구분석",
    icon: (
      <Image
        src="/images/icon/Msoccer.png"
        width={14}
        height={14}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "MLB분석",
    icon: (
      <Image
        src="/images/icon/Mbase.png"
        width={14}
        height={14}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "KBO/NPB분석",
    icon: (
      <Image
        src="/images/icon/Mbase.png"
        width={14}
        height={14}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "NBA분석",
    icon: (
      <Image
        src="/images/icon/Mbasketball.png"
        width={14}
        height={14}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "국내외농구분석",
    icon: (
      <Image
        src="/images/icon/Mbasketball.png"
        width={14}
        height={14}
        alt="menuIcon"
      />
    ),
  },
  {
    label: "배구분석",
    icon: (
      <Image
        src="/images/icon/Mvolleyball.png"
        width={14}
        height={14}
        alt="menuIcon"
      />
    ),
  },
];

export const categoryIcons: { [key: number]: JSX.Element } = {
  2: <FaFootballBall />,
  3: <FaBaseballBall />,
  4: <FaBasketballBall />,
  5: <FaVolleyballBall />,
  6: <FaCameraRetro />,
  7: <FaLaugh />,
  8: <FaCrown />,
  9: <FaComment />,
  10: <FaExclamationTriangle />,
};

export interface MenuItem {
  name: string;
  subMenu: { name: string; link: string }[];
}

export const menuItems: MenuItem[] = [
  {
    name: "회원관리",
    subMenu: [{ name: "회원 목록", link: "/protectedadmins" }],
  },
  {
    name: "포인트로그",
    subMenu: [
      { name: "포인트 히스토리", link: "/protectedadmins/point-history" },
    ],
  },
  {
    name: "IP관리",
    subMenu: [{ name: "차단IP 관리", link: "/protectedadmins/iplist" }],
  },
  {
    name: "배너관리",
    subMenu: [{ name: "배너 관리", link: "/protectedadmins/bannerlist" }],
  },
];

import { Mark, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: string) => ReturnType;
    };
  }
}

export const FontSize = Mark.create({
  name: "fontSize",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize || null,
        renderHTML: (attributes) => {
          if (!attributes.fontSize) return {};
          return { style: `font-size: ${attributes.fontSize}` };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (element) => {
          const fontSize = (element as HTMLElement).style.fontSize;
          return fontSize ? { fontSize } : {};
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (size: string) =>
        ({ chain }) => {
          return chain().setMark(this.name, { fontSize: size }).run();
        },
    };
  },
});
