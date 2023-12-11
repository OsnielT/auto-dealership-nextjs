import React from "react";
import Carousel from "../Carousel/Carousel";
import Link from "next/link";

export default function Card({ car, carouselItems, formattedPrice }) {
  return (
    <div
      className={`card border-2 hover:border-slate-400 bg-white hover:bg-slate-200 p-2 px-4 py-4 w-full h-full relative rounded-2xl flex flex-col justify-between ${
        car.attributes.featured == true ? "featured-card" : null
      } `}
      key={car.id}
    >
      <div>
        <Carousel items={carouselItems} />

        <Link href={`vehicle/${car.id}`}>
          <p className="text-slate-950 font-extrabold car-title-elipse pt-4">
            {car.attributes.Title}
          </p>
          <p className="text-sky-950 my-3 text-2xl ">{formattedPrice}</p>
          <span
            className={`${
              car.attributes.used_status == "Used"
                ? "bg-slate-500 bg-opacity-20 text-slate-600 "
                : "bg-blue-600 bg-opacity-20 text-blue-600"
            }   font-semibold py-2 mb-3 inline-block px-3 text-xs  rounded-2xl`}
          >
            {car.attributes.used_status}
          </span>
        </Link>
      </div>

      <Link
        className={`${
          car.attributes.featured == true ? "featured" : null
        } border-2 border-slate-600   rounded-md bg-slate-600 text-white hover:bg-slate-600 transition-all ease-in-out duration-200 px-3 py-1 w-/12 text-center`}
        href={`vehicle/${car.id}`}
      >
        View Details
      </Link>
    </div>
  );
}
