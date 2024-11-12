import { useState } from "react";

interface TransferPopupProps {
  onClose: () => void;
  onConfirm: (postType: number) => void;
}

const TransferPopup: React.FC<TransferPopupProps> = ({
  onClose,
  onConfirm,
}) => {
  const [selectedPostType, setSelectedPostType] = useState<number | null>(null);

  const categories = [
    { id: 1, name: "파트너" },
    { id: 2, name: "해외축구분석" },
    { id: 3, name: "아시아축구분석" },
    { id: 4, name: "MLB분석" },
    { id: 5, name: "KBO/NPB분석" },
    { id: 6, name: "NBA분석" },
    { id: 7, name: "국내외농구분석" },
    { id: 8, name: "배구분석" },
    { id: 9, name: "안구정화" },
    { id: 10, name: "유머이슈" },
    { id: 11, name: "나는분석왕" },
    { id: 12, name: "자유게시판" },
    { id: 13, name: "피해사례" },
    { id: 14, name: "이벤트" },
    { id: 15, name: "포인트교환신청" },
    { id: 16, name: "일반홍보" },
    { id: 17, name: "꽁머니홍보" },
    { id: 18, name: "구인구직" },
    { id: 19, name: "공지사항" },
    { id: 20, name: "1:1문의" },
  ];

  const handleConfirm = () => {
    if (selectedPostType !== null) {
      onConfirm(selectedPostType);
      onClose();
    } else {
      alert("이동할 게시판을 선택하세요");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full transform transition-all duration-300 sm:p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center sm:text-2xl">
          이동할 게시판을 선택하세요
        </h2>
        {/* Scrollable content area */}
        <ul className="grid grid-cols-2 gap-2 overflow-y-auto mb-4 max-h-[40vh]">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`flex items-center p-2 border rounded-md cursor-pointer text-sm transition-all duration-200 ${
                selectedPostType === category.id
                  ? "border-teal-600 bg-teal-500 text-white"
                  : "border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedPostType(category.id)}
            >
              <input
                type="radio"
                id={`category-${category.id}`}
                name="category"
                value={category.id}
                checked={selectedPostType === category.id}
                onChange={() => setSelectedPostType(category.id)}
                className="hidden"
              />
              <label
                htmlFor={`category-${category.id}`}
                className="cursor-pointer w-full text-center"
              >
                {category.name}
              </label>
            </li>
          ))}
        </ul>
        {/* Buttons */}
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded shadow hover:bg-gray-400 transition text-sm"
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            className="px-3 py-1 bg-teal-600 text-white rounded shadow hover:bg-teal-700 transition text-sm"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferPopup;