import Image from "next/image";
import React from "react";

export default function LargeCarouselSmallThumbnail({
  idx,
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
      className={`rounded ${
        isActive ? "opacity-100" : "opacity-60"
      }  hover:opacity-100 transition-opacity duration-150 cursor-pointer w-full border-2 border-primary`}
      src={src}
      width={100}
      height={100}
      alt={`${alt} thumbnail image ${idx}`}
    />
  );
}
