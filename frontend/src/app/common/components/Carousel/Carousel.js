"use client";
import styles from "@/app/common/components/Carousel/Carousel.module.scss";
import Image from "next/image";

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
          loading = 'lazy' 
          quality={100}
          style={{
            objectFit: 'cover', // cover, contain, none   
            minHeight: 222+"px"         
          }}

          className="w-full rounded-lg"
        />
        
        <p>{items[currentIndex].description}</p>
      </div>
      <div
        className={`${styles["btn-wrapper"]} mt-2 flex justify-between absolute left-0 left-1/2 top-1/2 `}
      >
        <button
          className="prev text-white text-opacity-60 hover:scale-105 hover:bg-slate-100 hover:text-black transition duration-300 font-extrabold ease-in-out rounded-full"
          onClick={goPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          className="next text-white text-opacity-60 hover:scale-105 hover:bg-slate-100 hover:text-black transition duration-300 font-extrabold ease-in-out rounded-full"
          onClick={goNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
