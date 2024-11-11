import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { oldpassword, newpassword } = await request.json();

    const cookieStore = cookies();
    const accessToken = cookieStore.get("Authorization")?.value;

    if (!oldpassword || !newpassword) {
      return NextResponse.json(
        { error: "Missing required fields: oldpassword, newpassword" },
        { status: 400 }
      );
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/mypw`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      body: JSON.stringify({
        oldpassword,
        newpassword,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to update password:", errorText);
      return NextResponse.json(
        { error: "Failed to update password on the server" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating password:", error);
    return NextResponse.json(
      { error: "An error occurred while updating password" },
      { status: 500 }
    );
  }
}
