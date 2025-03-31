import Carousel from '@/app/common/components/Carousel/Carousel';
import Link from 'next/link';

export default function Card({
  className,
  car,
  carouselItems,
  formattedPrice,
}) {
  return (
    <div
      className={`${className} card z-0 shadow hover:shadow-xl top-0 hover:-top-2 bg-white transition-all ease-in-out overflow-hidden w-full h-full relative rounded-2xl flex flex-col justify-between ${
        car?.featured == true ? 'featured-card' : null
      } `}
      key={car?.id}
    >
      <div className="jusify-center flex flex-col ">
        <Carousel items={carouselItems} />

        <Link
          className="px-4 w-full mx-auto inline-block pt-2"
          href={`vehicle/${car?.documentId}`}
        >
          <span
            className={`bg-primary/20 text-primary font-normal py-[2px] px-[8px] inline-block text-xs rounded-2xl mb-2`}
          >
            {car?.used_status}
          </span>
          <p className="text-slate-950 font-extrabold car-title-elipse">
            {car?.Title}
          </p>
          <p className="text-primary my-3 text-3xl ">{formattedPrice}</p>
        </Link>
      </div>

      <Link
        className={`${
          car?.featured == true ? 'featured' : null
        } border-2 border-primary rounded-md bg-primary text-secondary hover:text-primary hover:bg-transparent transition-all m-3 ease-in-out duration-200 px-3 py-1 w-/12 text-center`}
        href={`vehicle/${car?.documentId}`}
      >
        View Details
      </Link>
    </div>
  );
}
