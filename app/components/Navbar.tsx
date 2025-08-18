import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="navbar-section px-3 sm:px-3.5 md:px-5">
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
            <button className="btn_primary py-2.5 px-6">Login</button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
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
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 nav_ite active"
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
