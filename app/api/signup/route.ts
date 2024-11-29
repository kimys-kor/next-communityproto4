import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guest/join`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (response.status === 406 || response.status === 409) {
      const result = await response.json();
      return NextResponse.json(
        { error: result.message || "중복된 아이디입니다." },
        { status: response.status }
      );
    }

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json(
      { error: "회원 가입에 문제가 발생했습니다" },
      { status: 500 }
    );
  }
}
