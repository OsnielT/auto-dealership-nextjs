import Carousel from "../../common/components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

async function getData(vehicleId) {
  const res = await fetch(
    `http://localhost:1337/api/cars/${vehicleId}/?populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jsonData = await res.json();
  return jsonData.data || [];
}

export default async function Page({ params }) {
  const car = await getData(params.id);
  const { Title, price, Body, car_Image, Car_Features } = car.attributes;
  const markup = { __html: Body };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const mileageFormatted = new Intl.NumberFormat("en-US").format(
    Car_Features.mileage
  );

  return (
    <main>
      <div className="flex text-black gap-4 p-10">
        <div className="w-2/3 bg-slate-200 p-8 rounded-lg ">
          <h1 className="text-3xl mb-7">{Title}</h1>

          <div className="flex flex-wrap gap-4">
            {car_Image.data.map((image) => {
              return (
                <Image
                  draggable={false}
                  className="rounded w-1/4 hover:scale-150 shadow-sm shadow-slate-200 hover:shadow-2xl hover:shadow-slate-800 transition-all ease-in-out duration-500 cursor-cell"
                  key={car.id}
                  src={`http://localhost:1337${image.attributes.formats.small.url}`}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              );
            })}
          </div>
          <p className="mt-8 my-4 text-2xl font-semibold">Description:</p>
          <div className="description" dangerouslySetInnerHTML={markup} />
        </div>
        <div className="w-1/3 bg-slate-200 p-8 rounded-lg ">
          <p className="text-lg ">
            <span className="text-4xl font-bold">{formattedPrice}</span>
          </p>
          <div className="flex gap-4 ">
            <button className="my-7 w-1/2 text-white text-2xl bg-sky-600 border-2 border-sky-600 rounded-md hover:bg-transparent hover:text-sky-700 transition-all ease-in-out duration-300 px-5 py-2">
              Get a Quote
            </button>
            <button className="my-7 w-1/2 text-white text-2xl bg-green-600 border-2 border-green-600 rounded-md hover:bg-transparent hover:text-green-700 transition-all ease-in-out duration-300 px-5 py-2">
              Call Us Now!
            </button>
          </div>

          <div>
            <p className="text-xl mb-5 ">Features: </p>
            <ul className="text-lg">
              <li className="pb-2">
                <span className="font-bold ">Mileage:</span> {mileageFormatted}
              </li>
              <li className="pb-2">
                <span className="font-bold ">MPG:</span> {Car_Features.mpg}
              </li>
              <li className="pb-2">
                <span className="font-bold ">Fuel:</span>{" "}
                {Car_Features.fuel_type}
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
                <span className="font-bold ">Exterior Color:</span>{" "}
                {Car_Features.exterior_color}
              </li>
              <li className="pb-2">
                <span className="font-bold ">Interior Color:</span>{" "}
                {Car_Features.interior_color}
              </li>
              <li className="pb-2">
                <span className="font-bold ">Horsepower:</span>{" "}
                {Car_Features.horsepower}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
