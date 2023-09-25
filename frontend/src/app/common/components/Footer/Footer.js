import Link from "next/link";
import React from "react";
import NavItems from "../NavItems/NavItems";


export default function Footer(company_info) {
  const data = company_info.children.attributes;

  return (
    <footer className="text-white bg-sky-700 space-x-10 p-5 pt-9 px-10 justify-center align-middle content-center text-center ">

      <div className="inline-grid grid-cols-4 gap-4 w-full px-10 mx-auto">
        <ul className="p-0 m-0 flex flex-col justify-evenly">
          <li>{data.street_address_1}</li>
          <li>{data.street_address_2}</li>
          <li>
            {data.city}, {data.state}, {data.zip_code}
          </li>
          <li>
            <a href={`tel:${data.phone}`}>{data.phone}</a>
          </li>
          <li>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </li>
        </ul>
        <div className="border-s-2 border-sky-600">
          <NavItems className={`ms-10`} />
        </div>
        <div className="border-s-2 border-sky-600"></div>
        <div className="border-s-2 border-sky-600 flex flex-col justify-evenly ps-10">
          <a className="hover:text-red-600 transition-all ease-in-out duration-300" href={`#Instagram/${data.instagram}`}>
            Instagram
          </a>
          <a className="hover:text-red-600 transition-all ease-in-out duration-300" href={`#Twitter/${data.twitter}`}>
            Twitter
          </a>
          <a className="hover:text-red-600 transition-all ease-in-out duration-300" href={`#Facebook/${data.facebook}`}>
            Facebook
          </a>
          <a className="hover:text-red-600 transition-all ease-in-out duration-300" href={`#Youtube/${data.youtube}`}>
            Youtube
          </a>
          <a className="hover:text-red-600 transition-all ease-in-out duration-300" href={`#Pinterest/${data.pinterest}`}>
            Pinterest
          </a>
          <span>{data.instagram}</span>
        </div>
      </div>
        <Link
        href="/"
        className={`text-xl font-medium text-center block border-t-2 pt-5 border-sky-600 italic mt-8`}
      >
   
      </Link>
    </footer>
  );
}
