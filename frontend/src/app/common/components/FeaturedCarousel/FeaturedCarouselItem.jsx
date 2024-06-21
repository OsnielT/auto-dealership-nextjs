import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formattedPrice } from "../../hooks/formatters";

export default function FeaturedCarouselItem({ currentSlideIdx, car, idx }) {
  const { Title } = car.attributes;
  const { url } = car.attributes.car_Image.data[0].attributes;
  const { Car_Features } = car.attributes;
  const mileageFormatted = new Intl.NumberFormat("en-US").format(
    Car_Features.mileage
  );

  return (
    <div
      className={`panel relative text-secondary bg-primary overflow-hidden shadow-sm sm:flex-row flex-col items-center flex ${
        currentSlideIdx === idx ? "active" : ""
      }`}
    >
      <div className={`w-full xl:w-1/2 h-full p-4 sm:p-0`}>
        <Image
          unoptimized
          className="rounded-lg sm:rounded-none object-cover w-full h-full sm:h-[400px] md:h-[520px] lg:h-full    "
          src={`http://localhost:1337${url}`}
          width={800}
          height={800}
          loading="lazy"
          full={true}
          alt={Title}
        />
      </div>
      <div
        className={`p-5 lg:p-10 px-5 lg:px-14 sm:p-6 flex flex-col text-left w-full lg:w-1/2 sm:w-[300px] h-full sm:absolute lg:relative sm:justify-center sm:bg-sky-800 lg:bg-transparent sm:bg-opacity-75 sm:backdrop-blur-sm lg:backdrop-blur-none `}
      >
        <span className={`text-2xl sm:text-xl lg:text-4xl font-medium`}>
          {Title}
        </span>
        <span
          className={`text-4xl sm:text-3xl lg:text-4xl font-light py-8 sm:py-4`}
        >
          {formattedPrice(car.attributes.price)}
        </span>
        <ul className="text-lg">
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Mileage:</span>
            {mileageFormatted}
          </li>
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Transmission:</span>
            {Car_Features.transmission}
          </li>
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Drivetrain:</span>
            {Car_Features.drivetrain}
          </li>
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Color:</span>
            {Car_Features.exterior_color}
          </li>
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Horsepower:</span>
            {Car_Features.horsepower}
          </li>
        </ul>
        <Link
          className="border cursor-pointer border-secondary font-bold bg-primary block hover:bg-secondary hover:text-primary hover:border-primary transition-all duration-150 py-3 mt-5 rounded-lg text-center w-1/4 sm:w-2/4"
          href={`/vehicle/${car.id}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
