'use client';

import Card from '@/common/components/Card/Card';
import FeaturedCarousel from '@/common/components/FeaturedCarousel/FeaturedCarousel';
import Search from '@/common/components/Search/Search';
import { formattedPrice } from '@/common/hooks/formatters';
import useFetchCars from '@/common/hooks/useFetchCars';
import { TbCircleDotted } from 'react-icons/tb';
export default function Page() {
  const cars = useFetchCars();

  const featuredCars = cars.filter((car) => car?.featured) || [];

  while (cars.length === 0) {
    return (
      <main className="w-screen h-screen flex text-center items-center justify-center text-5xl text-primary">
        <p>Loading...</p>
        <TbCircleDotted />
      </main>
    ); // Render this or a similar message when there are no cars
  }

  return (
    <main className="">
      <div className={` text-center bg-white`}>
        <div className="bg-black banner overflow-hidden flex flex-col justify-center gap-5 ">
          <FeaturedCarousel featuredCars={featuredCars} />
        </div>
      </div>
      <section className="bg-primary px-4 py-8 lg:p-14">
        <p className="text-center text-white font-bol pb-4 text-3xl">
          Looking for something?
        </p>
        <Search />
      </section>
      <section className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 w-full p-10 mx-auto">
        {cars &&
          cars.map((car) => {
            const carouselItems =
              car?.car_Image?.map((image) => ({
                image: `${process.env.NEXT_PUBLIC_BASE_URL}${image?.url}`,
                alt: image?.name || 'Car Image',
                description: '', // Assuming there's no specific description for images in the provided data
              })) || [];

            return (
              <Card
                className="z-0 relative"
                car={car}
                carouselItems={carouselItems}
                formattedPrice={formattedPrice(car?.price || 0)}
                key={car.id}
              />
            );
          })}
      </section>
    </main>
  );
}
