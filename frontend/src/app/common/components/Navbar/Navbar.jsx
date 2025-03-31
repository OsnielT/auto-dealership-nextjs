'use client';
import useBusinessInfo from '@/common/hooks/useFetchBusinessInfo';
import { FaPhone } from 'react-icons/fa';
import { formattedPhone } from '../../hooks/formatters';
import NavItems from '../NavItems/NavItems';

export default function Navbar() {
  const business = useBusinessInfo();

  const { phone = '', name = '' } = business || {};

  return (
    <header className="bg-primary shadow-lg">
      <nav className="bg-secondary dark:bg-primary w-full border-b border-white dark:border-primary">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="/"
              className="h-8"
              alt={`${name} logo`}
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary dark:text-white">
              {name}
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              type="button"
              href={`tel:${phone}`}
              aria-label={`Call us at ${formattedPhone(phone)}`}
              className="text-white flex items-center bg-primary hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary border-2 dark:border-white dark:hover:opacity-60 dark:focus:ring-white"
            >
              <FaPhone className="mr-2 " />
              {formattedPhone(phone)}
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:bg-primary/10 focus:ring-primary dark:text-secondary dark:hover:bg-secondary/20 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <NavItems className="flex space-x-6 text-secondary" />
          </div>
        </div>
      </nav>

      {/* <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 md:py-0 text-secondary">
        <Link
          className="text-3xl font-thin italic text-secondary"
          href="/"
          aria-label="Home"
        >
          <span className="font-bold">A</span>uto
          <span className="font-bold">D</span>ealer
        </Link>
        <div className="flex-1 md:flex-none md:me-10">
          <NavItems className="flex space-x-6 text-secondary" />
        </div>
        <a
          className="flex items-center text-primary md:text-secondary lg:text-2xl p-2 md:p-0 bg-secondary md:bg-transparent rounded-full md:rounded-none  transition-all duration-150"
          href={`tel:${phone}`}
          aria-label={`Call us at ${formattedPhone(phone)}`}
        >
          <FaPhone className="mr-2 " />
          {formattedPhone(phone)}
        </a>
      </nav> */}
    </header>
  );
}
