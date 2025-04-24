"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      src="/images/avatar.png"
      width={40}
      height={40}
      alt="avatar"
    />
  );
};

export default Avatar;
