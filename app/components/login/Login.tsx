"use client";
import React, { useState, useEffect } from "react";
import IdIcon from "/public/images/idIcon.png";
import PassIcon from "/public/images/passIcon.png";
import Link from "next/link";
import Image from "next/image";
import Profile from "../Profile";
import ProfileSk from "../skeleton/ProfileSk";
import toast from "react-hot-toast";
import { refreshUserInfo } from "@/app/api/authAction";
import { useAuthStore } from "@/app/globalStatus/useAuthStore";
import { useUserStore } from "@/app/globalStatus/useUserStore";
import { UserInfo } from "@/app/types";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfoState] = useState<UserInfo | null>(null);
  const { loggedIn, setLoggedIn } = useAuthStore();
  const { setUserInfo, clearUserInfo } = useUserStore();

  useEffect(() => {
    const initializeUser = async () => {
      const data = await refreshUserInfo();
      if (data != null) {
        setLoggedIn(true);
        setUserInfo(data);
        setUserInfoState(data);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    };

    initializeUser();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        setLoggedIn(true);
        clearUserInfo();
        const { data } = await response.json();
        setUserInfo(data);
        setUserInfoState(data);
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
    <div className="max-w-128 bg-white p-8 rounded-lg w-full border border-solid border-gray-200 shadow-sm">
      {loggedIn && userInfo ? (
        <Profile userInfo={userInfo} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-4"
        >
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image
                src="/images/idIcon.png"
                width={16}
                height={16}
                alt="ID Icon"
                className="text-gray-400"
              />
            </span>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition duration-150 ease-in-out"
              placeholder="아이디"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image
                src="/images/passIcon.png"
                width={16}
                height={16}
                alt="Password Icon"
                className="text-gray-400"
              />
            </span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition duration-150 ease-in-out"
              placeholder="비밀번호"
              required
            />
          </div>
          <section className="flex flex-col space-y-3 pt-2">
            <button
              type="submit"
              className="py-3 px-4 bg-blue hover:bg-[#2250f5] text-white font-semibold w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out"
            >
              로그인
            </button>
            <Link className="w-full" href={"/signup"}>
              <button
                type="button"
                className="py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out"
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
