import Image from 'next/image';
import Link from 'next/link';
import { formattedPrice } from '../../hooks/formatters';

export default function FeaturedCarouselItem({ currentSlideIdx, car, idx }) {
  console.log('featured car: ', car);
  const { Title } = car;
  const { url } = car.car_Image[0];
  const { Car_Features } = car;
  const mileageFormatted = new Intl.NumberFormat('en-US').format(
    Car_Features.mileage
  );

  return (
    <div
      className={`panel relative text-secondary bg-primary/50 overflow-hidden shadow-sm sm:flex-row flex-col items-center flex ${
        currentSlideIdx === idx ? 'active' : ''
      }`}
    >
      <div className={`w-full xl:w-1/2 h-full p-4 sm:p-0`}>
        <Image
          unoptimized
          className="rounded-lg sm:rounded-none object-cover w-full h-full sm:h-[400px] md:h-[520px] lg:h-full    "
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`}
          width={800}
          height={800}
          loading="lazy"
          full={true}
          alt={Title}
        />
      </div>
      <div
        className={`p-5 lg:p-1 px-5 lg:px-14 sm:px-12 flex flex-col text-left w-full lg:w-1/2 sm:w-[350px] h-full bg-primary/50  lg:bg-transparent sm:absolute lg:relative sm:justify-center sm:backdrop-blur-sm lg:backdrop-blur-none `}
      >
        <span className={`text-2xl sm:text-xl lg:text-4xl font-medium`}>
          {Title}
        </span>
        <span
          className={`text-4xl sm:text-3xl lg:text-4xl font-light py-8 sm:py-4`}
        >
          {formattedPrice(car.price)}
        </span>
        <ul className="text-lg">
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Mileage:</span>
            {mileageFormatted}
          </li>
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Transmission:</span>
            {Car_Features.transmission}
          </li>
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Drivetrain:</span>
            {Car_Features.drivetrain}
          </li>
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Color:</span>
            {Car_Features.exterior_color}
          </li>
          <li className="pb-2 sm:pb-1">
            <span className="font-bold ">Horsepower:</span>
            {Car_Features.horsepower}
          </li>
        </ul>
        <Link
          className="border cursor-pointer border-secondary font-bold bg-primary block hover:bg-secondary hover:text-primary hover:border-primary transition-all duration-150 py-3 mt-5 rounded-lg text-center w-1/4 sm:w-2/4"
          href={`/vehicle/${car.documentId}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
