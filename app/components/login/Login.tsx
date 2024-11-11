"use client";
import React, { useState, useEffect } from "react";
import IdIcon from "/public/images/idIcon.png";
import PassIcon from "/public/images/passIcon.png";
import Link from "next/link";
import Image from "next/image";
import Profile from "../Profile";
import ProfileSk from "../skeleton/ProfileSk";
import toast from "react-hot-toast";
import { refreshUser } from "@/app/api/authAction";
import { useUserStore } from "@/app/globalStatus/useUserStore";
import { UserInfo } from "@/app/types";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo, clearUserInfo } = useUserStore();

  useEffect(() => {
    const initializeUser = async () => {
      const data = await refreshUser();
      if (data != null) {
        setUserInfo(data);
      } else {
        clearUserInfo();
      }
      setLoading(false);
    };
    initializeUser();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { data } = await response.json();
        setUserInfo(data);
      } else {
        toast.error("아이디와 비밀번호를 확인해주세요");
      }
    } catch (error) {
      toast.error("서버 오류가 발생했습니다");
    }
  };

  if (loading) {
    return <ProfileSk />;
  }

  return (
    <div className="max-w-128 bg-white p-8 rounded-lg w-full border-solid border-slate-200 border">
      {userInfo ? (
        <Profile userInfo={userInfo} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="relative mb-4">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="truncate appearance-none border rounded w-full pl-9 py-2 px-3 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
              placeholder="아이디"
              required
            />
            <Image src={IdIcon} width={17} height={17} alt="Id Icon" className="absolute top-2 left-2" />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="truncate appearance-none border rounded w-full pl-9 py-2 px-3 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
              placeholder="비밀번호"
              required
            />
            <Image src={PassIcon} width={17} height={17} alt="Password Icon" className="absolute top-2 left-2" />
          </div>
          <section className="flex flex-col gap-3">
            <button
              type="submit"
              className="py-3 px-4 bg-blue hover:bg-[#2250f5] text-white font-bold w-full rounded focus:outline-none"
            >
              로그인
            </button>
            <Link href="/signup" className="w-full">
              <button
                type="button"
                className="py-3 px-4 bg-[#6870e9] hover:bg-[#525dee] text-white font-bold w-full rounded focus:outline-none"
              >
                회원가입
              </button>
            </Link>
          </section>
        </form>
      )}
    </div>
  );
};

export default Login;