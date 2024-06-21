import React from 'react';
import Link from "next/link";

export default function NavItems({ className }) {
  return (
    <ul className={className}>
      <li>
        <Link
          className="hover:text-primary hover:bg-secondary hover:opacity-80 p-3 lg:p-5 block transition-all duration-200 ease-in-out"
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-primary hover:bg-secondary hover:opacity-80 p-3 lg:p-5 block transition-all duration-200 ease-in-out"
          href="/about-us"
        >
          About Us
        </Link>
      </li>
      <li className="relative group">
        <a
          className="hover:text-primary hover:bg-secondary hover:opacity-80 p-3 lg:p-5 block transition-all duration-200 ease-in-out cursor-pointer"
        >
          Inventory
        </a>
        <ul className="absolute overflow-hidden left-0 mt-2 w-48 bg-primary  shadow-2xl rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform translate-y-2 transition-all duration-200 ease-in-out invisible">
          <li>
            <Link href="/inventory/new" className="block px-4 py-2 hover:bg-secondary hover:text-primary transition-colors duration-300">
              New Cars
            </Link>
          </li>
          <li>
            <Link href="/inventory/used" className="block px-4 py-2 hover:bg-secondary hover:text-primary transition-colors duration-300">
              Used Cars
            </Link>
          </li>
          <li>
            <Link href="/inventory/certified" className="block px-4 py-2 hover:bg-secondary hover:text-primary transition-colors duration-300">
              Certified Pre-Owned
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <a
          className="hover:text-primary hover:bg-secondary hover:opacity-80 p-3 lg:p-5 block transition-all duration-200 ease-in-out"
          href="#"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
