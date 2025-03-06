import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("Authorization")?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const item = await request.json(); // 받아온 데이터 (유저 정보)

    // userId와 point 파라미터를 쿼리로 전달받기
    const { userId, point } = item;

    // 유효성 검사: userId와 point가 존재하는지 확인
    if (!userId || typeof point !== "number") {
      return NextResponse.json(
        { error: "Invalid userId or point" },
        { status: 400 }
      );
    }

    // '/admin/user/add/point' API 호출 URL 생성
    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/user/add/point`
    );
    url.searchParams.append("userId", userId.toString());
    url.searchParams.append("point", point.toString());

    // 포인트를 업데이트하는 API 요청
    const response = await fetch(url.toString(), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to update user point:", errorText);
      return NextResponse.json(
        { error: "Failed to update user point" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in update user point request:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
