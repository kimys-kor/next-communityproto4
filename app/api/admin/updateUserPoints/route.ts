import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("Authorization")?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId, point } = await request.json();

    // Validate input
    if (userId === undefined || point === undefined || isNaN(Number(point))) {
      return NextResponse.json(
        { error: "Invalid input: userId and a numeric point are required." },
        { status: 400 }
      );
    }

    const pointValue = Number(point);

    // Ensure NEXT_PUBLIC_API_URL is defined (as user reverted to this)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.error("NEXT_PUBLIC_API_URL environment variable is not defined!");
      return NextResponse.json(
        {
          error: "Server configuration error: NEXT_PUBLIC_API_URL is missing.",
        },
        { status: 500 }
      );
    }

    // Construct the backend API URL using the user-specified path and query parameters
    // Assuming NEXT_PUBLIC_API_URL might contain /api, remove it before adding the correct path.
    const backendUrl = `${apiUrl.replace("/api", "")}/admin/user/add/point?userId=${userId}&point=${pointValue}`;
    console.log(
      "Calling backend API (GET with query params to /admin path) to update points:",
      backendUrl
    );

    // Send GET request
    const backendResponse = await fetch(backendUrl, {
      method: "GET", // Keep GET based on @GetMapping
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    // Check if the backend request was successful
    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      console.error("Backend API error:", errorText);
      return NextResponse.json(
        {
          error: "Failed to update points via backend API.",
          details: errorText,
        },
        { status: backendResponse.status }
      );
    }

    // Backend request was successful
    const result = await backendResponse.json(); // Assuming backend returns JSON
    console.log("Backend API success response:", result); // For debugging

    // Return success response to the client
    return NextResponse.json(
      { message: "Points updated successfully", data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/admin/updateUserPoints:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown server error";
    return NextResponse.json(
      { error: "Internal server error", details: errorMessage },
      { status: 500 }
    );
  }
}
