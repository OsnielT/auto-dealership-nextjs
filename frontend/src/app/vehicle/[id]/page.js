"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

async function getData(vehicleId) {
  const res = await fetch(
    `http://localhost:1337/api/cars/${vehicleId}/?populate=*`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jsonData = await res.json();
  return jsonData.data || [];
}

export default function Page({ params: { id } }) {
  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    getData(id).then((data) => setCar(data.attributes));
  }, [id]);

  // Function to set the main image based on thumbnail click
  const setMainImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to show the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === car.car_Image.data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to show the previous image
  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? car.car_Image.data.length - 1 : prevIndex - 1
    );
  };

  if (!car)
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex align-middle items-center justify-center text-4xl">
        Loading...
      </div>
    ); // Show loading state while data is being fetched

  const { Title, car_Image } = car;
  const {
    drivetrain,
    exterior_color,
    fuel_type,
    horsepower,
    interior_color,
    mileage,
    mpg,
    transmission,
  } = car.Car_Features;

  return (
    <main>
      <div className=" w-full p-8 rounded-lg">
        <div className="flex flex-row gap-8">
          <div className="max-md:w-2/3 w-6/12 relative">
            {/* Main Image */}
            <div className="relative">
              <Image
              unoptimized
                draggable={false}
                className="rounded w-full"
                src={`http://localhost:1337${car_Image.data[currentImageIndex].attributes.url}`}
                width={900}
                height={900}
                alt={`${Title}`}
              />
              {/* Show Previous Image Button */}
              <button
                onClick={showPrevImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 rounded-md bg-white bg-opacity-60 px-2 text-lg hover:bg-opacity-100 transition-all duration-150"
              >
                &#10094;
              </button>
              {/* Show Next Image Button */}
              <button
                onClick={showNextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 rounded-md bg-white bg-opacity-60 px-2 text-lg hover:bg-opacity-100 transition-all duration-150"
              >
                &#10095;
              </button>
            </div>
            <div className="columns-6 mt-3">
              {car_Image.data.map((image, idx) => (
                <Image
                  key={`car-image-${idx}`}
                  onClick={() => setMainImage(idx)}
                  draggable={false}
                  unoptimized
                  className="rounded opacity-60 hover:opacity-100 transition-opacity duration-150 cursor-pointer w-full border border-cyan-800"
                  src={`http://localhost:1337${image.attributes.url}`}
                  width={100}
                  height={100}
                  alt={`${Title} thumbnail image ${idx}`}
                />
              ))}
            </div>
          </div>
          <div className="w-6/12">
            <h1 className="text-3xl mb-7">{Title}</h1>
            <p className="text-2xl my-8 border-b-[1pt] border-b-gray-600 pb-3">
              Features
            </p>
            <ul>
              <li className="font-bold">
                drivetrain <span className="font-normal">{drivetrain}</span>
              </li>
              <li className="font-bold">
                exterior_color
                <span className="font-normal">{exterior_color}</span>
              </li>
              <li className="font-bold">
                fuel_type <span className="font-normal">{fuel_type}</span>
              </li>
              <li className="font-bold">
                horsepower <span className="font-normal">{horsepower}</span>
              </li>
              <li className="font-bold">
                interior_color
                <span className="font-normal">{interior_color}</span>
              </li>
              <li className="font-bold">
                mileage <span className="font-normal">{mileage}</span>
              </li>
              <li className="font-bold">
                mpg <span className="font-normal">{mpg}</span>
              </li>
              <li className="font-bold">
                transmission <span className="font-normal">{transmission}</span>
              </li>
            </ul>
            <p className="text-2xl my-8 border-b-[1pt] border-b-gray-600 pb-3">
              Details
            </p>
            <div dangerouslySetInnerHTML={{ __html: car.Body }} />
          </div>
        </div>
      </div>
    </main>
  );
}
