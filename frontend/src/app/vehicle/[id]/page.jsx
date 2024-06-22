"use client";
import React, { useState, useEffect } from "react";
import LargeCarousel from "@/components/LargeCarousel/LargeCarousel";
import NextBreadcrumb from "@/app/common/components/NextBreadcrub/NextBreadcrumb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

  useEffect(() => {
    getData(id).then((data) => setCar(data.attributes));
  }, [id]);

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
  const mileageFormatted = new Intl.NumberFormat("en-US").format(mileage);
  return (
    <main>
      <div className=" w-full p-8 rounded-lg">
        <NextBreadcrumb
          homeElement={"Home"}
          separator={<FaChevronRight size={10} />}
          containerClasses="flex py-2 rounded items-center bg-slate-100 mb-5 text-sm"
          listClasses=" mx-2 "
          capitalizeLinks
        />
        <div className="flex flex-row gap-8">
          <div className="max-md:w-2/3 w-6/12 relative">
            {/* Main Image */}
            <LargeCarousel
              carImages={car_Image}
              alt={Title}
              allImages={car_Image.data}
            />
          </div>
          <div className="w-6/12">
            <h1 className="text-3xl mb-7">{Title}</h1>

            <p className="text-2xl my-8 border-b-[1pt] border-b-gray-600 pb-3">
              Details
            </p>
            <div dangerouslySetInnerHTML={{ __html: car.Body }} />

            <p className="text-2xl my-8 border-b-[1pt] border-b-gray-600 pb-3">
              Features
            </p>

            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Drivetrain</dt>
                  <dd className="text-gray-700 sm:col-span-2 capitalize">
                    {drivetrain}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Exterior Color</dt>
                  <dd className="text-gray-700 sm:col-span-2 capitalize">
                    {exterior_color}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Fuel Type</dt>
                  <dd className="text-gray-700 sm:col-span-2 capitalize">
                    {fuel_type}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Horsepower</dt>
                  <dd className="text-gray-700 sm:col-span-2 capitalize">
                    {horsepower}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Interior Color</dt>
                  <dd className="text-gray-700 sm:col-span-2 capitalize">
                    {interior_color}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Mileage</dt>
                  <dd className="text-gray-700 sm:col-span-2 capitalize">
                    {mileageFormatted}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">MPG</dt>
                  <dd className="text-gray-700 sm:col-span-2 capitalize">
                    {mpg}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Transmission</dt>
                  <dd className="text-gray-700 sm:col-span-2 capitalize">
                    {transmission}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
