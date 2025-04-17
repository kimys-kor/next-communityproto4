"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import Color from "@tiptap/extension-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faListOl,
  faListUl,
  faHeading,
  faImage,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useRef, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const getImageDimensions = (
  file: File
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve({ width: 0, height: 0 });
    };
    img.src = objectUrl;
  });
};

const FontSize = TextStyle.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {},
    };
  },
  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize || null,
        renderHTML: (attributes) => {
          if (!attributes.fontSize) return {};
          return {
            style: `font-size: ${attributes.fontSize}`,
          };
        },
      },
    };
  },
});

interface TipTapProps {
  value: string;
  onChange: (content: string) => void;
}

const MenuBar = ({ editor, uploadImagesToServer }: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [linkUrl, setLinkUrl] = useState<string>("");

  useEffect(() => {
    return () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setLinkUrl("");
    };
  }, []);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const imageDimensions = await Promise.all(
      files.map((file) => getImageDimensions(file))
    );

    const uploadedImageUrls = await uploadImagesToServer(files);
    uploadedImageUrls.forEach((url: string, index: number) => {
      const { width } = imageDimensions[index];
      editor
        .chain()
        .focus()
        .setImage({ src: url, style: `width: ${width}px;` })
        .run();
    });
  };

  const handleIconClick = () => fileInputRef.current?.click();

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editor.chain().focus().setColor(e.target.value).run();
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fontSize = e.target.value;
    editor.chain().focus().setMark("textStyle", { fontSize }).run();
  };

  const addLink = useCallback(() => {
    const url = prompt("Enter the URL", linkUrl);
    if (url) {
      const finalUrl =
        url.startsWith("http://") || url.startsWith("https://")
          ? url
          : `http://${url}`;
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: finalUrl, target: "_blank" })
        .run();
      setLinkUrl("");
    }
  }, [editor, linkUrl]);

  const removeLink = () => editor.chain().focus().unsetLink().run();

  if (!editor) return null;

  return (
    <div className="flex flex-wrap items-center gap-1 sm:gap-2 bg-gray-100 p-2 w-full border-b border-solid border-gray-200">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
        title="Bold"
      >
        <FontAwesomeIcon icon={faBold} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""}`}
        title="Heading 2"
      >
        <FontAwesomeIcon icon={faHeading} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${editor.isActive("bulletList") ? "bg-gray-300" : ""}`}
        title="Bullet List"
      >
        <FontAwesomeIcon icon={faListUl} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${editor.isActive("orderedList") ? "bg-gray-300" : ""}`}
        title="Ordered List"
      >
        <FontAwesomeIcon icon={faListOl} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${editor.isActive({ textAlign: "left" }) ? "bg-gray-300" : ""}`}
        title="Align Left"
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${editor.isActive({ textAlign: "center" }) ? "bg-gray-300" : ""}`}
        title="Align Center"
      >
        <FontAwesomeIcon icon={faAlignCenter} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${editor.isActive({ textAlign: "right" }) ? "bg-gray-300" : ""}`}
        title="Align Right"
      >
        <FontAwesomeIcon icon={faAlignRight} />
      </button>

      <button
        onClick={handleIconClick}
        className="p-1 sm:p-2 rounded text-xs sm:text-sm"
        title="Insert Image"
      >
        <FontAwesomeIcon icon={faImage} />
      </button>

      <button
        onClick={addLink}
        className="p-1 sm:p-2 rounded text-xs sm:text-sm"
        title="Add Link"
      >
        <FontAwesomeIcon icon={faLink} />
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
        multiple
      />

      <input
        type="color"
        onInput={handleTextColorChange}
        className="p-1 w-8 h-8 border border-gray-400 rounded"
        title="Text Color"
      />

      <select
        onChange={handleFontSizeChange}
        className="p-1 border border-gray-400 rounded text-xs sm:text-sm"
        title="Font Size"
      >
        <option value="24px">24px</option>
        <option value="32px">32px</option>
        <option value="38px">38px</option>
        <option value="42px">42px</option>
        <option value="56px">56px</option>
      </select>
    </div>
  );
};

// 팁탭
const Tiptap = ({ value, onChange }: TipTapProps) => {
  const [loading, setLoading] = useState(false);
  const editorRef = useRef<any>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortControllerRef.current = new AbortController();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-sm lg:prose-lg xl:prose-2xl prose-p:m-0 shadow appearance-none min-w-full min-h-[200px] sm:min-h-[400px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
      },
      handleDrop(view, event, slice, moved) {
        const dataTransfer = event.dataTransfer;

        if (
          dataTransfer &&
          dataTransfer.files &&
          dataTransfer.files.length > 0
        ) {
          event.preventDefault();
          handleMultipleImagesUpload(dataTransfer.files, editor);
        }
        return false;
      },
    },
    extensions: [
      StarterKit.configure({
        history: false,
        bulletList: { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
      }),
      FontSize,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          class: "text-blue-500 hover:text-blue-700",
        },
      }),
      ImageExtension,
      ImageResize,
      Color,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    editorRef.current = editor;
  }, [editor]);

  useEffect(() => {
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer?.files) {
        handleMultipleImagesUpload(e.dataTransfer.files, editor);
      }
    };

    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("drop", handleDrop);

    return () => {
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("drop", handleDrop);
    };
  }, [editor]);

  const uploadImagesToServer = async (files: File[]): Promise<string[]> => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("/api/board/upload", {
        method: "POST",
        body: formData,
        signal: abortControllerRef.current?.signal,
      });

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      const data = await response.json();
      return data.urls;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        console.log("Upload cancelled");
        return [];
      }
      console.error("Error uploading images:", error);
      toast.error("이미지 업로드에 문제가 발생했습니다");
      return [];
    }
  };

  const handleMultipleImagesUpload = async (
    files: FileList,
    editorInstance: any
  ) => {
    const fileArray = Array.from(files);
    const imageDimensions = await Promise.all(
      fileArray.map((file) => getImageDimensions(file))
    );

    const uploadedImageUrls = await uploadImagesToServer(fileArray);
    uploadedImageUrls.forEach((url: string, index: number) => {
      const { width } = imageDimensions[index];
      editorInstance
        .chain()
        .focus()
        .setImage({ src: url, style: `width: ${width}px;` })
        .run();
    });
  };

  if (!editor) return null;

  return (
    <div className="w-full">
      <MenuBar editor={editor} uploadImagesToServer={uploadImagesToServer} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
