"use client";
import Link from "next/link";
import React from "react";
import NavItems from "../NavItems/NavItems";
import useBusinessInfo from "@/common/hooks/useFetchBusinessInfo";
import { capitalizeWords } from "@/common/hooks/formatters";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  const business = useBusinessInfo();
  const {
    name = "",
    street_address_1 = "",
    street_address_2 = "",
    city = "",
    state = "",
    zip_code = "",
    phone = "",
    email = "",
    instagram = "",
    twitter = "",
    facebook = "",
    youtube = "",
    pinterest = "",
  } = business?.attributes || {};

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
              <a href={`tel:${phone}`} className="text-secondary hover:text-primary">{phone}</a>
            </p>
            <p>
              <a href={`mailto:${email}`} className="text-secondary hover:text-primary">{email}</a>
            </p>
          </address>
          <nav className="mb-6 md:mb-0">
            <NavItems className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-secondary" />
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
        <div className="mt-8 text-center border-t border-secondary pt-4">
          <p>
            © {new Date().getFullYear()} {capitalizeWords(name)}. All rights reserved.
          </p>
        </div>
      </footer>
    )
  );
}
