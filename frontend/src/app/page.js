// Assuming 'use client' is a comment or specific directive you've omitted for brevity
"use client";

import Carousel from "./common/components/Carousel/Carousel";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "./common/components/Card/Card";

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

export default function Page() {
  const [cars, setCars] = useState([]);

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

<div className={` text-center p-24 bg-slate-300`}>
  <p className="font-bold text-2xl p-6">VIP Car</p>
  <p>Add Car:</p>
  <p>IMAGE</p>
  <p>TITLE</p>
  <p>PRICE</p>
</div>

      <section className="inline-grid grid-cols-4 gap-4 w-full p-10 mx-auto">
        {cars.map((car) => {
          const carouselItems =
            car.attributes?.car_Image?.data?.map((image) => ({
              image: `http://localhost:1337${image.attributes.url}`,
              alt: image.attributes.formats.small.name || "Car Image",
              description: "", // Assuming there's no specific description for images in the provided data
            })) || [];

          const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car.attributes.price);

          return (
            <Card car={car} carouselItems={carouselItems} formattedPrice={formattedPrice} key={car.id} />
          );
        })}
      </section>
    </main>
  );
}
