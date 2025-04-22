import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("Authorization")?.value;

  // 원본 요청의 Content-Type 헤더 가져오기 (Boundary 포함)
  const contentType = request.headers.get("content-type");

  if (!request.body) {
    return NextResponse.json(
      { error: "Missing request body" },
      { status: 400 }
    );
  }

  if (!contentType) {
    return NextResponse.json(
      { error: "Missing content-type header" },
      { status: 400 }
    );
  }

  try {
    // request.formData() 대신 request.body 스트림 직접 사용
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/user/upload",
      {
        method: "POST",
        headers: {
          // Authorization 헤더 설정
          Authorization: `Bearer ${accessToken}`,
          // 원본 Content-Type 헤더 전달 (Boundary 포함)
          "Content-Type": contentType,
        },
        // request.body 스트림 전달 및 duplex 옵션 설정
        body: request.body,
        duplex: "half",
      } as any // 타입 에러 해결을 위한 단언
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from Spring API:", errorText);
      // 에러 응답 본문을 클라이언트에 더 자세히 전달 (선택적)
      // return NextResponse.json({ error: `Spring API Error: ${errorText}` }, { status: response.status });
      throw new Error(
        `Failed to upload files to the Spring API: ${response.statusText}`
      );
    }

    const responseData = await response.json();

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error uploading images:", error);
    return NextResponse.json(
      { error: "Failed to upload images" },
      { status: 500 }
    ); // 500 Internal Server Error
  }
}
