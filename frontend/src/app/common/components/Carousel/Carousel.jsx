"use client";
import styles from "@/app/common/components/Carousel/Carousel.module.scss";
import Image from "next/image";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
// components/SimpleCarousel.js
import { useState } from "react";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function goPrev() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden">
        <Image
          src={items[currentIndex].image}
          alt={items[currentIndex].alt}
          width={296}
          height={222}
          loading="lazy"
          quality={100}
          style={{
            objectFit: "cover", // cover, contain, none
            minHeight: 222 + "px",
          }}
          unoptimized
          className="w-full"
        />

        <p>{items[currentIndex].description}</p>
      </div>
      <div
        className={`${styles["btn-wrapper"]} mt-2 flex justify-between absolute left-1/2 top-1/2 `}
      >
        <button
          className="prev text-white hover:scale-105 hover:bg-slate-100 hover:text-black transition-all duration-300 font-extrabold ease-in-out rounded-full"
          onClick={goPrev}
        >
          <FaChevronCircleLeft size={24} />
        </button>
        <button
          className="next text-white hover:scale-105 hover:bg-slate-100 hover:text-black transition-all duration-300 font-extrabold ease-in-out rounded-full"
          onClick={goNext}
        >
          <FaChevronCircleRight size={24} />
        </button>
      </div>
    </div>
  );
}
