"use client";
import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useMemo,
  useCallback,
} from "react";
import { useUserStore } from "@/app/globalStatus/useUserStore";

// Define the types for user information and editable data
interface FormData {
  fullname: string;
  nickname: string;
  phoneNum: string;
}

const useUpdateUserInfo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateUserInfo = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/updateMyInfo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update user info");
      }

      await response.json();
      alert("회원정보가 성공적으로 수정되었습니다!");
      window.location.href = "/";
    } catch (error) {
      setError("회원정보 수정 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return { updateUserInfo, loading, error };
};

function InfoChange() {
  const { userInfo } = useUserStore();

  // Memoize editableData to avoid unnecessary recalculations
  const editableData = useMemo(
    () => ({
      fullname: userInfo?.fullName || "",
      nickname: userInfo?.nickname || "",
      phoneNum: userInfo?.phoneNum || "",
    }),
    [userInfo]
  );

  const { updateUserInfo, loading, error } = useUpdateUserInfo();

  // Handle input changes with debounce logic
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const [editableDataState, setEditableData] = useState<FormData>(editableData);

  // Detect changes to enable the submit button
  const hasChanges = useMemo(() => {
    return (
      editableDataState.fullname !== userInfo?.fullName ||
      editableDataState.nickname !== userInfo?.nickname ||
      editableDataState.phoneNum !== userInfo?.phoneNum
    );
  }, [editableDataState, userInfo]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await updateUserInfo(editableDataState);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col items-center gap-3"
        >
          <div className="w-full md:w-1/2 md:px-0 lg:w-1/3 px-3">
            <div className="w-full mt-3 flex flex-col gap-1">
              <div className="w-full flex flex-col gap-2 p-2">
                <p className="w-24">아이디</p>
                <input
                  defaultValue={userInfo?.username}
                  disabled
                  className="w-full truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-subtext leading-tight focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 md:px-0">
            <p className="py-3 font-semibold text-lg border-solid border-b border-[#F3F3F3]">
              개인정보 입력
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <div className="w-full flex flex-col gap-3 p-2">
                <p className="w-24">이름</p>
                <input
                  name="fullname"
                  value={editableDataState.fullname}
                  onChange={handleInputChange}
                  className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col gap-3 p-2">
                <p className="w-24">닉네임</p>
                <input
                  name="nickname"
                  value={editableDataState.nickname}
                  onChange={handleInputChange}
                  className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col gap-2 p-2">
                <p className="w-24">핸드폰번호</p>
                <p className="text-subtext2 text-sm">-없이 숫자만 입력</p>
                <input
                  name="phoneNum"
                  value={editableDataState.phoneNum}
                  onChange={handleInputChange}
                  maxLength={11}
                  className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-full gap-3 flex justify-center p-2">
            <button
              type="submit"
              disabled={!hasChanges || loading}
              className={`w-full md:w-1/2 lg:w-1/3 px-4 py-4 ${
                hasChanges && !loading
                  ? "bg-blue text-white hover:bg-deepblue"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
            >
              {loading ? "저장 중..." : "회원정보수정"}
            </button>
          </div>
        </form>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
}

export default InfoChange;
