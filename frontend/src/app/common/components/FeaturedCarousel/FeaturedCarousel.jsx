import React, { useState } from "react";
import SlideButton from "./slideButton";
import FeaturedCarouselItem from "./FeaturedCarouselItem";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function FeaturedCarousel({ featuredCars }) {
  const [currentSlideIdx, setSlideIdx] = useState(0);
  const slidesLength = featuredCars.length;

  return (
    <div className="relative">
      {featuredCars &&
        featuredCars.map((car, idx) => {
          return (
            <FeaturedCarouselItem
              currentSlideIdx={currentSlideIdx}
              idx={idx}
              car={car}
            />
          );
        })}
      {slidesLength > 1 && (
        // Display Pagination
        <div className="absolute boreder top-1/2 -translate-y-1/2 left-0 w-full p-2 flex gap-2 justify-between items-center">
          <SlideButton className="px-1 py-1" isDisabled={currentSlideIdx > 0}  action={()=>setSlideIdx(currentSlideIdx-1)} label ={<FaChevronLeft />}/> 
          <SlideButton className="px-1 py-1" isDisabled={currentSlideIdx < slidesLength-1} action={()=>setSlideIdx(currentSlideIdx+1)} label={<FaChevronRight />} /> 
        </div>
      )}
    </div>
  );
}
