'use client';
import { capitalizeWords } from '@/common/hooks/formatters';
import useBusinessInfo from '@/common/hooks/useFetchBusinessInfo';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import NavItems from '../NavItems/NavItems';

export default function Footer() {
  const business = useBusinessInfo();
  const {
    name = '',
    street_address_1 = '',
    street_address_2 = '',
    city = '',
    state = '',
    zip_code = '',
    phone = '',
    email = '',
    instagram = '',
    twitter = '',
    facebook = '',
    youtube = '',
    pinterest = '',
  } = business || {};

  return (
    business && (
      <footer className="bg-primary text-secondary py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-5">
          <address className="not-italic text-center md:text-left mb-6 md:mb-0">
            <p className="mb-2">{capitalizeWords(street_address_1)}</p>
            <p className="mb-2">{capitalizeWords(street_address_2)}</p>
            <p className="mb-2">
              {capitalizeWords(city)}, {state.toUpperCase()}, {zip_code}
            </p>
            <p className="mb-2">
              <a
                href={`tel:${phone}`}
                className="text-secondary hover:text-primary"
              >
                {phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${email}`}
                className="text-secondary hover:text-primary"
              >
                {email}
              </a>
            </p>
          </address>
          <nav className="mb-6 md:mb-0 flex h-full w-full">
            <div className="flex flex-col justify-between items-stretch content-between h-full w-full">
              <NavItems className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-secondary mt-0 mb-auto" />
              <p className="mt-auto mb-0">
                © {new Date().getFullYear()} {capitalizeWords(name)}. All rights
                reserved.
              </p>
            </div>
          </nav>
          <div className="flex flex-row gap-2 align-middle items-center justify-center">
            <a
              className="hover:text-primary transition-all ease-in-out duration-300"
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              className="hover:text-primary transition-all ease-in-out duration-300"
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              className="hover:text-primary transition-all ease-in-out duration-300"
              href={`https://facebook.com/${facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              className="hover:text-primary transition-all ease-in-out duration-300"
              href={`https://youtube.com/${youtube}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a
              className="hover:text-primary transition-all ease-in-out duration-300"
              href={`https://pinterest.com/${pinterest}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
      </footer>
    )
  );
}
