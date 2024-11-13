import { NextResponse } from "next/server";
import { formatDate, formatNew } from "@/app/utils";
import { BoardItem } from "@/app/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const typ = searchParams.get("typ");
  const keyword = searchParams.get("keyword");
  const page = searchParams.get("page");
  const size = searchParams.get("size");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/list?typ=${typ}&keyword=${keyword}&page=${page}&size=${size}`,
      {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch board list");
    }

    const data = await response.json();

    const formattedContent = data.data.content.map((item: BoardItem) => ({
      ...item,
      isNew: formatNew(item.createdDt.toString()) || false,
      changedcreatedDt: formatDate(item.createdDt.toString()),
    }));

    return NextResponse.json({
      ...data,
      data: {
        ...data.data,
        content: formattedContent,
      },
    });
  } catch (error) {
    console.error("Error fetching board list:", error);
    return NextResponse.json(
      { error: "Failed to fetch board list" },
      { status: 500 }
    );
  }
}