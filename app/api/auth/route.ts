import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    if (typeof window !== "undefined") {
      sessionStorage.clear();
    }
    const cookieStore = cookies();
    const allCookies = cookieStore.getAll();
    allCookies.forEach((cookie) => cookieStore.delete(cookie.name));

    const { username, password } = await request.json();

    // Log the environment variable value right before using it
    console.log("API_URL in /api/auth:", process.env.API_URL);

    const apiResponse = await fetch(process.env.API_URL + "/guest/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (apiResponse.ok) {
      const accessToken = apiResponse.headers.get("Authorization");

      if (accessToken != null) {
        cookieStore.set("Authorization", accessToken, {
          secure: true,
          httpOnly: true,
          maxAge: 7200,
          sameSite: "none",
        });
      }

      const setCookieHeader = apiResponse.headers.get("set-cookie");
      const jsonData = await apiResponse.json();

      const response = NextResponse.json({
        message: "ok",
        data: jsonData.data,
      });

      if (setCookieHeader) {
        response.headers.set("Set-Cookie", setCookieHeader);
      }

      return response;
    } else {
      return NextResponse.json(
        { error: "Login failed" },
        { status: apiResponse.status }
      );
    }
  } catch (error) {
    console.error("Error in /api/auth:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errorStack =
      error instanceof Error ? error.stack : "No stack trace available";
    return NextResponse.json(
      {
        error: "Server error",
        details: errorMessage,
        stack: process.env.NODE_ENV === "development" ? errorStack : undefined,
      },
      { status: 500 }
    );
  }
}
