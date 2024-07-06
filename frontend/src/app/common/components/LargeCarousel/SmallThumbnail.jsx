import Image from "next/image";
import React from "react";

export default function SmallThumbnail({
  idx,
  className,
  action,
  isActive,
  alt,
  src,
}) {
  return (
    <Image
      key={`car-image-${idx}`}
      onClick={action}
      draggable={false}
      unoptimized
      className={`${className} ${
        isActive ? "opacity-100 border-primary border" : "opacity-60"
      }  hover:opacity-100 transition-opacity duration-150 cursor-pointer w-full`}
      src={src}
      width={100}
      height={100}
      alt={`${alt} thumbnail image ${idx}`}
    />
  );
}
