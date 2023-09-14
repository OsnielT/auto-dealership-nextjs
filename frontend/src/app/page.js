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
      <div className={` text-center p-8 bg-white`}>
        <div className="bg-white banner rounded-2xl flex flex-col  justify-center gap-5 py-8 px-2 ">
          {featuredCars.map((car, idx) => {
            const { Title } = car.attributes;
            const { url } =
              car.attributes.car_Image.data[0].attributes.formats.medium;
            const { price, Body, car_Image, Car_Features } = car.attributes;
            const mileageFormatted = new Intl.NumberFormat("en-US").format(
              Car_Features.mileage
            );

            return (
              <div className={`panel items-center bg-slate-200 rounded-3xl overflow-hidden shadow-2xl flex ${idx == 0 ? "active" : ""}`}>
                <div className={`w-1/2 `}>
                  <div className={` `}>
                    <Image
                      className=""
                      src={`http://localhost:1337${url}`}
                      width={800}
                      height={800}
                      alt={Title}
                    />
                  </div>
                </div>
                <div className={`p-10 flex flex-col text-left w-1/2 `}>
                  <span className={`text-2xl font-bold`}>{Title}</span>
                  <span className={`text-4xl font-light py-8`}>
                    {formattedPrice(car.attributes.price)}
                  </span>
                  <ul className="text-lg">
                    <li className="pb-2">
                      <span className="font-bold ">Mileage:</span>{" "}
                      {mileageFormatted}
                    </li>
                    <li className="pb-2">
                      <span className="font-bold ">Transmission:</span>{" "}
                      {Car_Features.transmission}
                    </li>
                    <li className="pb-2">
                      <span className="font-bold ">Drivetrain:</span>{" "}
                      {Car_Features.drivetrain}
                    </li>
                    <li className="pb-2">
                      <span className="font-bold ">Color:</span>{" "}
                      {Car_Features.exterior_color}
                    </li>
                    <li className="pb-2">
                      <span className="font-bold ">Horsepower:</span>{" "}
                      {Car_Features.horsepower}
                    </li>
                  </ul>
                  <Link className="bg-slate-700 block hover:bg-slate-300 transition-all duration-150 text-white py-3 mt-5 rounded-lg text-center w-1/4 cursor-pointer" href={`/`}>Learn More</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="inline-grid grid-cols-4 gap-4 w-full p-10 mx-auto">
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
