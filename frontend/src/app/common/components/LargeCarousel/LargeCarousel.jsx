import Image from 'next/image';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SmallThumbnail from './SmallThumbnail';

export default function LargeCarousel({ carImages, allImages, alt }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Function to set the main image based on thumbnail click
  const setMainImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to show the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to show the previous image
  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <React.Fragment>
      <div className="relative flex-1">
        <Image
          unoptimized
          draggable={false}
          className="rounded-xl w-100 object-cover h-[350px] lg:h-100 "
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${carImages[currentImageIndex].url}`}
          width={900}
          height={900}
          alt={`${alt}`}
        />
        {/* Show Previous Image Button */}
        <div className="absolute bottom-0 right-0 p-3 flex gap-3">
          <button
            onClick={showPrevImage}
            className=" bg-white rounded-lg text-white hover:text-primary bg-opacity-40 px-2 py-2 text-lg hover:bg-opacity-100 transition-all duration-150"
          >
            <FaChevronLeft size={20} />
          </button>
          {/* Show Next Image Button */}
          <button
            onClick={showNextImage}
            className=" bg-white rounded-lg text-white hover:text-primary bg-opacity-40 px-2 py-2 text-lg hover:bg-opacity-100 transition-all duration-150"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex md:flex-col w-28 gap-4 md:pl-4 pt-4 md:pt-0">
        {allImages.map((image, idx) => (
          <SmallThumbnail
            idx={idx}
            key={`thumb-${idx}`}
            className="rounded-lg"
            action={() => setMainImage(idx)}
            isActive={currentImageIndex === idx}
            alt={alt}
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.url}`}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
