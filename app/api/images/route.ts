import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// API 라우트 설정 추가
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // 예시: 10MB로 설정 (필요에 따라 조절)
    },
  },
};

export async function POST(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("Authorization")?.value;

  try {
    const formData = await request.formData();

    const uploadFormData = new FormData();

    formData.forEach((value, key) => {
      if (value instanceof Blob) {
        uploadFormData.append("files", value, (value as File).name);
      }
    });

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/user/upload",
      {
        method: "POST",
        body: uploadFormData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from Spring API:", errorText);
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
    );
  }
}
