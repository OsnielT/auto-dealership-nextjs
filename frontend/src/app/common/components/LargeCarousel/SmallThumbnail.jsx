import Image from 'next/image';

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
      key={`car-thumb-image-${idx}`}
      onClick={action}
      draggable={false}
      unoptimized
      className={`${className} ${
        isActive ? 'opacity-100  border-primary/60' : 'opacity-60'
      }  hover:opacity-100 border-4 transition-opacity duration-150 cursor-pointer lg:w-full`}
      src={src}
      width={100}
      height={100}
      alt={`${alt} thumbnail image ${idx}`}
    />
  );
}
