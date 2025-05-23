'use client';
import NextBreadcrumb from '@/app/common/components/NextBreadcrub/NextBreadcrumb';
import { formattedPrice } from '@/app/common/hooks/formatters';
import LargeCarousel from '@/components/LargeCarousel/LargeCarousel';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleGroup,
  CollapsibleToggler,
} from '@faceless-ui/collapsibles';
import { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

import FinancialDetailsByPrice from '@/app/common/components/FinancialDetailsByPrice/FinancialDetailsByPrice';
async function getData(vehicleId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/${vehicleId}/?populate=*`,
      { cache: 'force-cache' }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const jsonData = await res.json();
    return jsonData.data || [];
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
    throw error; // Re-throw to handle in component
  }
}

export default function Page({ params: { id } }) {
  const [car, setCar] = useState(null);
  console.log('car id: ', id);
  console.log('data ', car);
  useEffect(() => {
    getData(id).then((data) => setCar(data));
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
  const mileageFormatted = new Intl.NumberFormat('en-US').format(mileage);

  return (
    <main>
      <div className=" w-full p-8 rounded-lg">
        <NextBreadcrumb
          homeElement={'Home'}
          separator={<FaChevronRight size={10} />}
          containerClasses="flex py-3 px-3 rounded items-center bg-primary/10 mb-5 text-sm"
          listClasses=" mx-2 "
          capitalizeLinks
        />
        <h1 className="text-4xl mb-7 font-bold lg:hidden flex">{Title}</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col md:flex-row relative">
              {/* Main Image */}
              <LargeCarousel
                carImages={car_Image}
                alt={Title}
                allImages={car_Image}
              />
            </div>
            <p className="my-5 lg:mt-3 lg:mb-8 text-2xl lg:hidden flex flex-col bg-primary/10 p-4 rounded-2xl">
              Price:{' '}
              <span className="text-4xl text-primary">
                {formattedPrice(car.price | 0)}
              </span>
            </p>
            <div className=" rounded-xl lg:mt-7">
              <CollapsibleGroup allowMultiple>
                <Collapsible
                  transTime={150}
                  transCurve="ease-in"
                  className="bg-primary/10"
                >
                  {/* <CollapsibleToggler className=" py-3 rounded-t-lg border-b-2 border-b-primary/50 w-full text-start">
                    <p className="text-xl ">Details</p>
                  </CollapsibleToggler> */}
                  {car?.Body && (
                    <CollapsibleContent className="px-4 bg-primary/10 rounded-b-lg mb-2">
                      <div
                        className="py-6"
                        dangerouslySetInnerHTML={{ __html: car.Body }}
                      />
                    </CollapsibleContent>
                  )}
                </Collapsible>
                <Collapsible
                  transCurve="ease-in"
                  transTime={150}
                >
                  <CollapsibleToggler className=" py-3 rounded-t-lg border-b-2 border-b-primary/50 w-full  text-start">
                    <p className="text-xl ">Features</p>
                  </CollapsibleToggler>
                  <CollapsibleContent className="px-4 bg-primary/10 rounded-b-lg mb-2">
                    <div className="flow-root py-6">
                      <dl className="-my-3 divide-y divide-primary text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Drivetrain
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2 capitalize">
                            {drivetrain}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Exterior Color
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2 capitalize">
                            {exterior_color}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Fuel Type
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2 capitalize">
                            {fuel_type}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Horsepower
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2 capitalize">
                            {horsepower}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Interior Color
                          </dt>
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
                          <dt className="font-medium text-gray-900">
                            Transmission
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2 capitalize">
                            {transmission}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CollapsibleGroup>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="hidden lg:flex flex-col lg:mb-4">
              <h1 className="text-4xl mb-4 font-bold">{Title}</h1>
              <p className="mt-3 mb-4 text-2xl">
                Price:{' '}
                <span className="text-3xl text-primary">
                  {formattedPrice(car.price | 0)}
                </span>
              </p>
            </div>

            <FinancialDetailsByPrice carPrice={car.price} />
          </div>
        </div>
      </div>
    </main>
  );
}
