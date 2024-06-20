"use client";

import Card from "@/common/components/Card/Card";
import Search from "@/common/components/Search/Search";
import FeaturedCarousel from "@/common/components/FeaturedCarousel/FeaturedCarousel";
import useFetchCars from "@/common/hooks/useFetchCars";
import {formattedPrice} from "@/common/hooks/formatters"; 

export default function Page() {

  const cars = useFetchCars();

  const featuredCars = cars.filter((car) => car.attributes.featured) || [];

  const goToItemPage = (id) => {
    router.push(`/item/${id}`);
  };

  if (cars.length === 0) {
    return <p>No cars available.</p>; // Render this or a similar message when there are no cars
  }

  return (
    <main className="">
      <div className={` text-center bg-white`}>
        <div className="bg-white banner overflow-hidden flex flex-col  justify-center gap-5 ">
          <FeaturedCarousel featuredCars={featuredCars} />
        </div>
      </div>
      <section className="bg-sky-500 p-14">
        <p className="text-center text-white font-extralight p-8 pt-0 text-2xl">
          You wanna search for something?
        </p>

        <Search />
      </section>
      <section className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 w-full p-10 mx-auto">
        {cars &&
          cars.map((car) => {
            const carouselItems =
              car.attributes?.car_Image?.data?.map((image) => ({
                image: `http://localhost:1337${image.attributes.url}`,
                alt: image?.attributes?.name || "Car Image",
                description: "", // Assuming there's no specific description for images in the provided data
              })) || [];

            return (
              <Card
                className="z-0 relative"
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

