// Assuming 'use client' is a comment or specific directive you've omitted for brevity
"use client";

import Carousel from "./common/components/Carousel/Carousel";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "./common/components/Card/Card";
import Image from "next/image";
async function getData() {
  const res = await fetch(
    "http://localhost:1337/api/cars/?populate=*&sort=featured:desc"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jsonData = await res.json();
  return jsonData.data || []; // Ensure that we return an array, either the fetched data or an empty array.
}

function formattedPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export default function Page() {
  const [cars, setCars] = useState([]);
  const featuredCars = cars.filter((car) => car.attributes.featured === true);
  useEffect(() => {
    async function fetchCars() {
      try {
        const fetchedCars = await getData();
        setCars(fetchedCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    fetchCars();
  }, []);

  const goToItemPage = (id) => {
    router.push(`/item/${id}`);
  };

  return (
    <main className="">
      <div className={` text-center bg-white`}>
        <div className="bg-white banner overflow-hidden flex flex-col  justify-center gap-5 ">
          {featuredCars.map((car, idx) => {
            const { Title } = car.attributes;
            const { url } =
              car.attributes.car_Image.data[0].attributes.formats.medium;
            const { price, Body, car_Image, Car_Features } = car.attributes;
            const mileageFormatted = new Intl.NumberFormat("en-US").format(
              Car_Features.mileage
            );
            console.log("car: ", car);
            return (
              <div
                className={`panel  text-slate-100 bg-sky-800 overflow-hidden shadow-sm sm:flex-row flex-col items-stretch flex ${
                  idx == 0 ? "active" : ""
                }`}
              >
                <div className={`w-full lg:w-1/2 h-full p-4 sm:p-0`}>
                  <Image
                    className="rounded-lg sm:rounded-none object-cover w-full h-full sm:h-[400px] md:h-[520px] lg:h-full    "
                    src={`http://localhost:1337${url}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    full
                    alt={Title}
                  />
                </div>
                <div
                  className={`p-5 lg:p-10 px-5 lg:px-14 sm:p-6 flex flex-col text-left w-full lg:w-1/2 sm:w-[300px] h-full sm:absolute lg:relative sm:justify-center sm:bg-sky-800 lg:bg-transparent sm:bg-opacity-75 sm:backdrop-blur-sm lg:backdrop-blur-none `}
                >
                  <span className={`text-2xl sm:text-xl lg:text-2xl font-bold`}>
                    {Title}
                  </span>
                  <span
                    className={`text-4xl sm:text-3xl lg:text-4xl font-light py-8 sm:py-4`}
                  >
                    {formattedPrice(car.attributes.price)}
                  </span>
                  <ul className="text-lg">
                    <li className="pb-2 sm:pb-1">
                      <span className="font-bold ">Mileage:</span>{" "}
                      {mileageFormatted}
                    </li>
                    <li className="pb-2 sm:pb-1">
                      <span className="font-bold ">Transmission:</span>{" "}
                      {Car_Features.transmission}
                    </li>
                    <li className="pb-2 sm:pb-1">
                      <span className="font-bold ">Drivetrain:</span>{" "}
                      {Car_Features.drivetrain}
                    </li>
                    <li className="pb-2 sm:pb-1">
                      <span className="font-bold ">Color:</span>{" "}
                      {Car_Features.exterior_color}
                    </li>
                    <li className="pb-2 sm:pb-1">
                      <span className="font-bold ">Horsepower:</span>{" "}
                      {Car_Features.horsepower}
                    </li>
                  </ul>
                  <Link
                    className="border border-white font-bold bg-sky-800 block hover:bg-sky-600 hover:border-sky-600 transition-all duration-150  py-3 mt-5 rounded-lg text-center w-1/4 sm:w-2/4 cursor-pointer"
                    href={`/vehicle/${car.id}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="bg-sky-600 p-14 border-b-8 border-sky-500">
        <p className="text-center text-white font-extralight p-8 pt-0 text-2xl">
          You wanna search for something?{" "}
        </p>
        <form
          className="w-full lg:w-6/12 flex gap-4 mx-auto"
          method="post"
          action=""
        >
          <input
            className="p-4 px-7 rounded-lg w-full border-4 focus:border-sky-500 focus:outline-none hover:border-sky-500 transition-all duration-150"
            type="text"
            name="search"
            placeholder="Search Make, Model, or Keyword"
          />
          <input
            className="p-4 px-6 rounded-lg  text-lg font-bold cursor-pointer border-2 border-sky-100 hover:border-sky-500 hover:bg-sky-500 transition-all duration-150 text-white"
            value="Search"
            name="submit"
            type="submit"
          />
        </form>
      </section>
      <section className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 w-full p-10 mx-auto">
        {cars.map((car) => {
          const carouselItems =
            car.attributes?.car_Image?.data?.map((image) => ({
              image: `http://localhost:1337${image.attributes.url}`,
              alt: image.attributes.formats.small.name || "Car Image",
              description: "", // Assuming there's no specific description for images in the provided data
            })) || [];

          return (
            <Card
              car={car}
              carouselItems={carouselItems}
              formattedPrice={formattedPrice(car.attributes.price)}
              key={car.id}
            />
          );
        })}
      </section>
    </main>
  );
}
