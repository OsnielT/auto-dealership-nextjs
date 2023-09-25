import React from "react";
import Carousel from "../Carousel/Carousel";
import Link from "next/link";

export default function Card({ car, carouselItems, formattedPrice }) {
  return (
    <div
      className={`card border-2 hover:border-slate-400 bg-white hover:bg-slate-200 p-2 px-4 py-4 w-full h-full relative rounded-2xl flex flex-col justify-between ${
        car.attributes.featured == true ? "featured" : null
      } `}
      key={car.id}
    >
      <div>
        <Carousel items={carouselItems} />

        <Link href={`vehicle/${car.id}`}>
          <p className="text-slate-950 font-extrabold  pt-4">
            {car.attributes.Title}{" "}
          </p>
          <span
            className={`${
              car.attributes.used_status == "Used"
                ? "bg-slate-500"
                : "bg-blue-600"
            } text-white py-1 px-2 text-xs font-normal rounded-xl`}
          >
            {car.attributes.used_status}
          </span>
          <p className="text-sky-950 pt-4 text-3xl mb-3">{formattedPrice}</p>
        </Link>
      </div>

      <Link
        className={`${
          car.attributes.featured == true ? "featured" : null
        } border-2 border-slate-600 font-bold text-dark rounded-md  hover:text-white hover:bg-slate-600 transition-all ease-in-out duration-200 px-3 py-1 w-5/12 text-center`}
        href={`vehicle/${car.id}`}
      >
        Learn More
      </Link>
    </div>
  );
}
