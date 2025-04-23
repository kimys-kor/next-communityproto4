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

    // Construct the backend API URL
    const backendUrl = `${process.env.API_URL}/admin/user/add/point?userId=${userId}&point=${pointValue}`;
    console.log("Calling backend API to update points:", backendUrl); // For debugging

    // Assuming PATCH method for the backend, adjust if needed (e.g., POST, PUT)
    const backendResponse = await fetch(backendUrl, {
      method: "PATCH",
      headers: {
        // No Content-Type needed if body is empty
        Authorization: `${accessToken}`,
      },
      // No body needed as data is in query params
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
        { status: backendResponse.status } // Return backend's status code
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
