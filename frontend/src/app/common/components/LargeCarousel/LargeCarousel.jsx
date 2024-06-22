import Image from "next/image";
import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import LargeCarouselSmallThumbnail from "./LargeCarouselSmallThumbnail";

export default function LargeCarousel({ carImages, allImages, alt }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Function to set the main image based on thumbnail click
  const setMainImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to show the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carImages.data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to show the previous image
  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carImages.data.length - 1 : prevIndex - 1
    );
  };

  return (
    <React.Fragment>
      <div className="relative">
        <Image
          unoptimized
          draggable={false}
          className="rounded w-full"
          src={`http://localhost:1337${carImages.data[currentImageIndex].attributes.url}`}
          width={900}
          height={900}
          alt={`${alt}`}
        />
        {/* Show Previous Image Button */}
        <button
          onClick={showPrevImage}
          className="absolute left-5 top-1/2 -translate-y-1/2 rounded-md text-white bg-opacity-60 px-2 text-lg hover:bg-opacity-100 transition-all duration-150"
        >
          <FaChevronCircleLeft size={24} />
        </button>
        {/* Show Next Image Button */}
        <button
          onClick={showNextImage}
          className="absolute right-5 top-1/2 -translate-y-1/2 rounded-md text-white bg-opacity-60 px-2 text-lg hover:bg-opacity-100 transition-all duration-150"
        >
          <FaChevronCircleRight size={24} />
        </button>
      </div>

      <div className="columns-6 mt-3">
        {allImages.map((image, idx) => (
            <LargeCarouselSmallThumbnail idx={idx} action={()=>setMainImage(idx)} isActive={currentImageIndex === idx} alt={alt} src={`http://localhost:1337${image.attributes.url}`} />
        ))}
      </div>
    </React.Fragment>
  );
}
