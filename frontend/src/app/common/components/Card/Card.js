import React from 'react'
import Carousel from '../Carousel/Carousel'
import Link from 'next/link'

export default function Card({ car, carouselItems, formattedPrice }) {
  return (
    <div
    className={`card bg-white hover:bg-slate-200 p-2 px-4 py-4 w-full h-full relative rounded-lg flex flex-col justify-between ${
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
          } text-white py-1 px-2 text-xs font-normal rounded-md`}
        >
          {car.attributes.used_status}
        </span>
        <p className="text-slate-950 pt-4 text-2xl mb-3">
          {formattedPrice}
        </p>
      </Link>
    </div>

    <Link className="bg-sky-600 border-2 border-sky-600 rounded-md hover:bg-transparent hover:text-sky-700 transition-all ease-in-out duration-300 px-4 py-1 w-1/4" href={`vehicle/${car.id}`}>
   
        Details

    </Link>
  </div>
  )
}
