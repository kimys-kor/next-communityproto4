import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") || "";
  const page = searchParams.get("page") || "0";
  const size = searchParams.get("size") || "10";

  const cookieStore = cookies();
  const accessToken = cookieStore.get("Authorization")?.value;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL environment variable is not defined!");
    return NextResponse.json(
      { error: "Server configuration error: NEXT_PUBLIC_API_URL is missing." },
      { status: 500 }
    );
  }

  try {
    const backendUrl = `${apiUrl.replace("/api", "")}/master/adiminUser?page=${page}&size=${size}&keyword=${encodeURIComponent(keyword)}`;
    console.log("Calling backend API for admin list:", backendUrl);

    const response = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Backend API error (${response.status}):`, errorText);
      throw new Error(`Failed to fetch admin list. Status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching admin user list:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to fetch admin user list", details: errorMessage },
      { status: 500 }
    );
  }
}
