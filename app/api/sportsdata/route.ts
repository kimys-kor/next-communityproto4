import { NextResponse } from "next/server";

// API 키를 환경 변수에서 가져옵니다.
const API_KEY = process.env.API_SPORTS_KEY;
// API-SPORTS 기본 URL (V3 기준)
const BASE_URL = "https://v3.football.api-sports.io"; // 예시: 축구 데이터

// GET 요청 핸들러
export async function GET(request: Request) {
  // 클라이언트로부터 필요한 파라미터 (예: 스포츠 종류, 리그 ID, 날짜 등)를 받을 수 있습니다.
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get("sport") || "football"; // 기본값: 축구
  const date =
    searchParams.get("date") || new Date().toISOString().split("T")[0]; // 기본값: 오늘 날짜 (YYYY-MM-DD)
  // const league = searchParams.get('league'); // 특정 리그 ID

  // API 키가 설정되지 않은 경우 에러 반환
  if (!API_KEY) {
    console.error("API Sports Key is not configured.");
    return NextResponse.json(
      { error: "API key is not configured on the server." },
      { status: 500 }
    );
  }

  // API 엔드포인트 URL 구성 (예시: 특정 날짜의 축구 경기 일정)
  // 실제 필요한 데이터에 따라 엔드포인트와 파라미터를 조정해야 합니다.
  // 예: https://v3.football.api-sports.io/fixtures?date=YYYY-MM-DD&league=LEAGUE_ID&season=SEASON_YEAR
  // 예: https://v3.odds.api-sports.io/odds?fixture=FIXTURE_ID (배당률은 다른 엔드포인트일 수 있음)

  // 우선 축구 경기 일정만 가져오는 예시
  const apiUrl = `${BASE_URL}/fixtures?date=${date}&status=NS`; // NS: Not Started (시작 전 경기)

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io", // 요청 헤더 확인 필요
        "x-rapidapi-key": API_KEY,
      },
      // Next.js 13+ 의 fetch 캐싱 제어 (필요에 따라 조정)
      next: { revalidate: 60 * 5 }, // 5분마다 재검증 (ISR과 유사)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Sports Error:", errorData);
      throw new Error(
        `API request failed with status ${response.status}: ${errorData.message || "Unknown error"}`
      );
    }

    const data = await response.json();

    // 필요한 데이터만 추출하거나 가공하여 반환할 수 있습니다.
    // 예: 경기 목록, 팀 이름, 시간, 배당률 등
    // 여기서는 받은 데이터를 그대로 반환합니다.
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching sports data:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { error: "Failed to fetch sports data", details: errorMessage },
      { status: 500 }
    );
  }
}
