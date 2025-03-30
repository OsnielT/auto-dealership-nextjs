'use client';
import { formattedPhone } from '@/common/hooks/formatters';
import useBusinessInfo from '@/common/hooks/useFetchBusinessInfo';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';
import NavItems from '../NavItems/NavItems';

export default function Navbar() {
  const business = useBusinessInfo();

  const { phone = '' } = business || {};

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 md:py-0 text-secondary">
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
      </nav>
    </header>
  );
}
