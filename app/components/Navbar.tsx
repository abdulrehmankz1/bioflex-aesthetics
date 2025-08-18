"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(
        ".hero_section"
      ) as HTMLElement;
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight - 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navClass = isScrolled ? "navbar-section-full" : "navbar-section";

  return (
    <header
      className={`${navClass} ${
        isScrolled ? "px-0" : "px-3 sm:px-3.5 md:px-5"
      }`}
    >
      <nav className="max-w-[1100px] container nav-container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/images/logo.svg"
              height={50}
              width={120}
              alt="Logo"
            />
          </Link>

          <div className="flex md:order-2 rtl:space-x-reverse">
            <button
              type="button"
              className="font-medium btn-circle text-sm cursor-pointer mr-2"
            >
              <Image
                src="/assets/images/bag.svg"
                width={25}
                height={25}
                alt="Search"
              />
            </button>
            <button
              type="button"
              className="font-medium btn-circle text-sm cursor-pointer mr-2"
            >
              <Image
                src="/assets/images/profile.svg"
                width={25}
                height={25}
                alt="Search"
              />
            </button>
            <button className="btn_primary py-2.5 px-6 hidden md:block">
              Login
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 nav_item active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 md:p-0 nav_item">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 md:p-0 nav_item">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 md:p-0 nav_item">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 md:p-0 nav_item">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 md:p-0 nav_item">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:hidden order-3 mt-4`}
          >
            <ul className="flex flex-col font-medium p-4 space-y-4">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 nav_item active"
                  aria-current="page"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 nav_item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 nav_item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 nav_item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 nav_item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 nav_item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Articles
                </Link>
              </li>
              <li className="pt-4">
                <button className="btn_primary py-2.5 px-6 w-full">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
