"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  FaFutbol,
  FaBaseballBall,
  FaBasketballBall,
  FaSync,
} from "react-icons/fa"; // 예시 아이콘

// API 응답 데이터 타입 정의 (API-SPORTS 응답 구조에 맞게 조정 필요)
interface Fixture {
  fixture: {
    id: number;
    date: string;
    timestamp: number;
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  teams: {
    home: { id: number; name: string; logo: string; winner: boolean | null };
    away: { id: number; name: string; logo: string; winner: boolean | null };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: { home: number | null; away: number | null };
    fulltime: { home: number | null; away: number | null };
    extratime: { home: number | null; away: number | null };
    penalty: { home: number | null; away: number | null };
  };
  // odds 데이터는 별도 요청 또는 fixture 응답에 포함될 수 있음 (API 문서 확인)
}

interface ApiResponse {
  response: Fixture[];
  // ... 기타 응답 필드
}

// 스포츠 탭 정의
const sportsTabs = [
  { name: "축구", key: "football", icon: FaFutbol },
  { name: "야구", key: "baseball", icon: FaBaseballBall },
  { name: "농구", key: "basketball", icon: FaBasketballBall },
  // 필요한 스포츠 추가
];

function SportsDataTable() {
  const [selectedSport, setSelectedSport] = useState(sportsTabs[0].key);
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // 데이터 가져오는 함수
  const fetchData = useCallback(async (sport: string) => {
    setLoading(true);
    setError(null);
    try {
      // API 라우트에 요청 (파라미터로 스포츠 종류 전달)
      const response = await fetch(
        `/api/sportsdata?sport=${sport}&date=${new Date().toISOString().split("T")[0]}`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.details || "Failed to fetch data from API route"
        );
      }
      const data: ApiResponse = await response.json();

      // 응답 데이터 확인 및 상태 업데이트
      if (data && data.response) {
        setFixtures(data.response);
        setLastUpdated(new Date().toLocaleTimeString());
      } else {
        setFixtures([]);
        console.warn("Received empty or invalid data from API", data);
      }
    } catch (err) {
      console.error("Error in fetchData:", err);
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setFixtures([]); // 에러 발생 시 데이터 초기화
    } finally {
      setLoading(false);
    }
  }, []);

  // 컴포넌트 마운트 시 및 선택된 스포츠 변경 시 데이터 로드
  useEffect(() => {
    fetchData(selectedSport);
  }, [selectedSport, fetchData]);

  // 주기적 데이터 업데이트 (예: 5분마다)
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        console.log("Refreshing sports data...");
        fetchData(selectedSport);
      },
      1000 * 60 * 5
    ); // 5분

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(intervalId);
  }, [selectedSport, fetchData]);

  // 테이블 렌더링 함수 (API 응답 구조에 맞춰 수정 필요)
  const renderTable = () => {
    if (loading && fixtures.length === 0) {
      return <div className="text-center py-10">데이터를 불러오는 중...</div>;
    }
    if (error) {
      return (
        <div className="text-center py-10 text-red-500">오류: {error}</div>
      );
    }
    if (fixtures.length === 0) {
      return (
        <div className="text-center py-10">오늘 예정된 경기가 없습니다.</div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-gray-700">
                시간
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-gray-700">
                리그
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-gray-700">
                홈팀
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-gray-700">
                vs
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-gray-700">
                원정팀
              </th>
              {/* 필요시 배당률 등 추가 컬럼 */}
              <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-gray-700">
                상태
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fixtures.map((fixture) => (
              <tr key={fixture.fixture.id} className="hover:bg-gray-50 text-sm">
                <td className="px-4 py-2 border border-gray-300 text-center whitespace-nowrap">
                  {new Date(
                    fixture.fixture.timestamp * 1000
                  ).toLocaleTimeString("ko-KR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center whitespace-nowrap">
                  {fixture.league.name}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-right font-medium">
                  {fixture.teams.home.name}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center text-xs">
                  vs
                </td>
                <td className="px-4 py-2 border border-gray-300 text-left font-medium">
                  {fixture.teams.away.name}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {/* 경기 상태 표시 (예: 시작 전, 진행 중, 종료 등) - API 응답 확인 필요 */}
                  <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                    시작 전
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* 탭 메뉴 */}
      <div className="flex border-b border-gray-300 mb-4">
        {sportsTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedSport(tab.key)}
            className={`flex items-center px-4 py-3 mr-1 text-sm font-medium transition-colors duration-200 
              ${
                selectedSport === tab.key
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            <tab.icon className="mr-2" />
            {tab.name}
          </button>
        ))}
      </div>

      {/* 데이터 테이블 */}
      {renderTable()}

      {/* 마지막 업데이트 시간 및 새로고침 버튼 */}
      <div className="text-right text-xs text-gray-500 mt-2 flex justify-end items-center">
        <span>마지막 업데이트: {lastUpdated || "-"}</span>
        <button
          onClick={() => fetchData(selectedSport)}
          disabled={loading}
          className="ml-2 p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          title="새로고침"
        >
          <FaSync
            className={`text-gray-600 ${loading ? "animate-spin" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

export default SportsDataTable;
