import React from "react";
import Carousel from "@/app/common/components/Carousel/Carousel";
import Link from "next/link";

export default function Card({
  className,
  car,
  carouselItems,
  formattedPrice,
}) {
  return (
    <div
      className={`${className} card z-0 shadow hover:shadow-xl top-0 hover:-top-2 bg-white transition-all ease-in-out hover:bg-slate-200 overflow-hidden w-full h-full relative rounded-2xl flex flex-col justify-between ${
        car.attributes.featured == true ? "featured-card" : null
      } `}
      key={car.id}
    >
      <div className="jusify-center flex flex-col ">
        <Carousel items={carouselItems} />

        <Link
          className="px-4 w-full mx-auto inline-block"
          href={`vehicle/${car.id}`}
        >
          <p className="text-slate-950 font-extrabold car-title-elipse pt-4">
            {car.attributes.Title}
          </p>
          <p className="text-sky-950 my-3 text-2xl ">{formattedPrice}</p>
          <span
            className={`bg-primary bg-opacity-20 text-secondary font-semibold py-2 mb-3 inline-block px-3 text-xs rounded-2xl`}
          >
            {car.attributes.used_status}
          </span>
        </Link>
      </div>

      <Link
        className={`${
          car.attributes.featured == true ? "featured" : null
        } border-2 border-primary rounded-md bg-primary text-secondary hover:text-primary hover:bg-transparent transition-all m-3 ease-in-out duration-200 px-3 py-1 w-/12 text-center`}
        href={`vehicle/${car.id}`}
      >
        View Details
      </Link>
    </div>
  );
}
