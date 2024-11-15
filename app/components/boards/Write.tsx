"use client";
import PostEditor from "@/app/components/texteditor/PostEditor";
import React, { useState } from "react";
import { postSaveServerAction } from "@/app/api/authAction";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

type savePostRequest = {
  postType: number;
  notification: boolean;
  title: string;
  content: string;
  thumbNail: string | null;
};

interface WriteProps {
  title: string;
  postType: number;
}

const Write: React.FC<WriteProps> = ({ title, postType }) => {
  const [content, setContent] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [notification, setNotification] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const basePath = pathname?.replace(/\/write$/, "") || "";

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotification(e.target.checked);
  };

  const extractThumbnail = (htmlContent: string): string | null => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const imgTag = doc.querySelector("img");
    return imgTag ? imgTag.getAttribute("src") : null;
  };

  const saveContent = async () => {
    if (!postTitle.trim() || !content.trim()) {
      toast.error("제목과 내용을 입력해주세요.");
      return;
    }
  
    const thumbNail = extractThumbnail(content);
  
    const postData: savePostRequest = {
      postType,
      notification: notification || false,
      title: postTitle,
      content: content,
      thumbNail: thumbNail,
    };
  
    try {
      const result = await postSaveServerAction(postData);
  
      if (result.status === "OK") {
        toast.success("게시물이 성공적으로 저장되었습니다!");
        router.push(`${basePath}`);
      } else if (result.status === "406") {
        toast.error(result.message || "포인트가 부족합니다.");
      } else {
        toast.error("로그인을 해주세요.");
        // window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      toast.error("홍보 작성에 문제가 발생했습니다.");
    }
  };

  return (
    <div className="p-4">
      <p className="text-lg md:text-xl py-2">{title} 작성</p>
      <section className="border-gray-300 flex flex-col gap-3">
        <div className="flex flex-col border-solid border-t">
          <div className="flex justify-between items-center h-12 md:h-16 border-b border-solid border-gray-200">
            <div className="w-1/3 h-full flex justify-center items-center bg-[#F2F4F9] text-sm md:text-base">
              옵션
            </div>
            <div className="w-full flex justify-center items-center h-10 pl-2">
              <label className="flex items-center gap-1 text-sm md:text-base">
                <input
                  type="checkbox"
                  id="notification"
                  checked={notification}
                  onChange={handleNotificationChange}
                />
                공지
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center h-12 md:h-16 border-solid border-b border-gray-300">
            <div className="w-1/3 h-full flex justify-center items-center bg-[#F2F4F9] text-sm md:text-base">
              제목
            </div>
            <div className="w-full flex justify-center items-center h-10 pl-2">
              <input
                type="text"
                id="title"
                className="truncate appearance-none border border-solid w-full px-4 py-2 text-sm md:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <section>
          <PostEditor value={content} onChange={handleContentChange} />
        </section>
        <div className="w-full flex justify-end gap-2 mt-4">
          <button
            onClick={() => router.back()}
            className="border border-blue text-blue px-3 py-2 w-20 md:w-24 h-10 md:h-12 text-sm md:text-base hover:bg-indigo-100"
          >
            취소
          </button>
          <button
            onClick={saveContent}
            className="bg-blue text-white px-3 py-2 w-20 md:w-24 h-10 md:h-12 text-sm md:text-base hover:bg-blue-600"
          >
            작성완료
          </button>
        </div>
      </section>
    </div>
  );
};

export default Write;
