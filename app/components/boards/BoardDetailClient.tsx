"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import masterIcon from "/public/images/masterIcon.png";
import { BiCommentDetail } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { LiaThumbsUp, LiaThumbsDown } from "react-icons/lia";
import { HiBars3 } from "react-icons/hi2";
import { BoardDetailClientProps, Comment } from "@/app/types";
import DOMPurify from "isomorphic-dompurify";
import { useUserStore } from "@/app/globalStatus/useUserStore";
import EditPost from "./EditPost";
import CommentPageClient from "./CommentClient";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface BoardDetailClientPropsWithComments extends BoardDetailClientProps {
  boardId: string;
  initialCommentsData: { comments: Comment[]; total: number };
}

const BoardDetailClient: React.FC<BoardDetailClientPropsWithComments> = ({
  content,
  boardId,
  initialCommentsData,
}) => {
  const pathname = usePathname();
  const basePath = pathname?.split("/").slice(0, -1).join("/") || "";
  const [isEditing, setIsEditing] = useState(false);

  const sanitizedData = () => {
    const contentHtml = content.content || "";
    return { __html: DOMPurify.sanitize(contentHtml) };
  };

  const { userInfo } = useUserStore();
  const canEditOrDelete =
    userInfo?.sck || userInfo?.username === content.username;

  const handleDelete = async () => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/board/deleteMyPost?boardId=${content.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        alert("게시물이 성공적으로 삭제되었습니다!");
        window.location.href = `/${basePath}`;
      } else {
        throw new Error("게시물 삭제 실패");
      }
    } catch (error) {
      toast.error("서버에 문제가 발생했습니다");
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <EditPost
        initialNotification={content.notification}
        postId={content.id}
        initialTitle={content.title}
        initialContent={content.content}
      />
    );
  }

  return (
    <div>
      <section className="flex flex-col gap-1 mt-3">
        <p className="font-semibold text-lg md:text:xl">{content.title}</p>
        <article className="mt-3 w-full px-3 py-2 flex items-center justify-between gap-1 bg-semiblue">
          <div className="flex items-center gap-1">
            {content.username === "master" && (
              <Image src={masterIcon} width={25} height={25} alt="adminIcon" />
            )}
            <p className="font-semibold">{content.nickname}</p>
          </div>
          <div className="flex gap-1 truncate px-2">
            <p className="font-light text-[#2C4AB6]">
              {content.createdDt.toString()}
            </p>
          </div>
        </article>
        <article className="px-3 py-2 flex items-center justify-between w-full">
          <section className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-subtext">
              <GrView />
              {content.hit}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <BiCommentDetail />
              {content.replyNum}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <LiaThumbsUp size={20} />
              {content.likes}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <LiaThumbsDown size={20} />
              {content.hate}
            </div>
          </section>
          <section className="flex items-center gap-3 text-md">
            {canEditOrDelete && (
              <>
                <button
                  onClick={handleEditClick}
                  className="text-blue hover:text-deepblue"
                >
                  수정
                </button>
                <button
                  onClick={handleDelete}
                  className="text-red-700 hover:text-red-700"
                >
                  삭제
                </button>
              </>
            )}
            <Link href={basePath}>
              <div className="flex items-center gap-1 cursor-pointer text-[#6c757d] hover:text-gray-600">
                <HiBars3 size={20} />
                <span>목록</span>
              </div>
            </Link>
          </section>
        </article>
      </section>
      <section className="px-3 py-10 flex flex-col gap-5">
        <article dangerouslySetInnerHTML={sanitizedData()}></article>
        <h1 className="text-white text-xs text-center">#토토사이트 #토토사이트추천 #먹튀사이트 #먹튀폴리스 #토토지노 #가입머니 #토토 #토토꽁머니 #토지노 ​#스포츠중계 #꽁머니팡 #중계 #축구중계 #중계사이트 #스포츠분석 #축구분석 #분석 #무료분석 
          #스포츠티비 #스포츠방송 #무료스포츠티비  #스포츠실시간 #토토추천 #토토사이트추천 #먹튀사이트 #먹튀없는사이트 #스포츠실시간중계 #꽁머니팡분석 #구글검색꽁머니팡7 #아시아스포츠중계 #아시아축구 #해외축구중계 
          #A리그 #J리그 #K리그 #국내축구 #일본축구 #호주축구 </h1>
      </section>
      {/* Conditionally render CommentPageClient only when not editing */}
      {!isEditing && (
        <CommentPageClient
          initialData={initialCommentsData}
          boardId={boardId}
        />
      )}
    </div>
  );
};

export default BoardDetailClient;