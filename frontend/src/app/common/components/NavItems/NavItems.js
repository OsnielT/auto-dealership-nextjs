import React from 'react'
import Link from "next/link";
export default function NavItems({className}) {
    
  return (
    <ul className={className}>
    <li>
      <Link
        className="text-white  hover:bg-sky-700 p-3 lg:p-5 block transition-all duration-200 ease-in-out"
        href="/"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        className="text-white hover:bg-sky-700  p-3 lg:p-5 block transition-all duration-200 ease-in-out"
        href="/about-us"
      >
        About Us
      </Link>
    </li>
    <li>
      <a
        className="text-white hover:bg-sky-700 p-3 lg:p-5 block transition-all duration-200 ease-in-out"
        href="#"
      >
        Contact
      </a>
    </li>
  </ul>
  )
}
