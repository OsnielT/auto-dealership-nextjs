import SlideButton from '@/components/FeaturedCarousel/SlideButton';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import FeaturedCarouselItem from './FeaturedCarouselItem';

export default function FeaturedCarousel({ featuredCars }) {
  const [currentSlideIdx, setSlideIdx] = useState(0);
  const slidesLength = featuredCars.length;
  const handlePrevClick = () => {
    setSlideIdx((prevIdx) => (prevIdx - 1 + slidesLength) % slidesLength);
  };

  const handleNextClick = () => {
    setSlideIdx((prevIdx) => (prevIdx + 1) % slidesLength);
  };
  return (
    <div className="relative">
      {featuredCars &&
        featuredCars.map((car, idx) => {
          return (
            <FeaturedCarouselItem
              currentSlideIdx={currentSlideIdx}
              idx={idx}
              car={car}
              key={`featered-car-${idx}`}
            />
          );
        })}
      {slidesLength > 1 && (
        // Display Pagination

        <div className="absolute boreder bottom-0 right-0 p-4 flex gap-4 justify-between items-center">
          <SlideButton
            className="px-2 py-2"
            action={() => handlePrevClick()}
            label={<FaChevronLeft color="white" />}
          />
          <SlideButton
            className="px-2 py-2"
            action={() => handleNextClick()}
            label={<FaChevronRight color="white" />}
          />
        </div>
      )}
    </div>
  );
}
