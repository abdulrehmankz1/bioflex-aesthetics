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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.25 6.39167V5.58333C6.25 3.70833 7.75833 1.86667 9.63333 1.69167C11.8667 1.475 13.75 3.23333 13.75 5.425V6.575"
                  stroke="#CCB391"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.50034 18.3333H12.5003C15.8503 18.3333 16.4503 16.9917 16.6253 15.3583L17.2503 10.3583C17.4753 8.325 16.892 6.66666 13.3337 6.66666H6.66701C3.10868 6.66666 2.52534 8.325 2.75034 10.3583L3.37534 15.3583C3.55034 16.9917 4.15034 18.3333 7.50034 18.3333Z"
                  stroke="#CCB391"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9131 9.99999H12.9206"
                  stroke="#CCB391"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.07908 9.99999H7.08657"
                  stroke="#CCB391"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="font-medium btn-circle text-sm cursor-pointer mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.1331 9.05833C10.0498 9.05 9.94981 9.05 9.85814 9.05833C7.8748 8.99166 6.2998 7.36666 6.2998 5.36666C6.2998 3.325 7.9498 1.66666 9.99981 1.66666C12.0415 1.66666 13.6998 3.325 13.6998 5.36666C13.6915 7.36666 12.1165 8.99166 10.1331 9.05833Z"
                  stroke="#CCB391"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.9666 12.1333C3.94993 13.4833 3.94993 15.6833 5.9666 17.025C8.25827 18.5583 12.0166 18.5583 14.3083 17.025C16.3249 15.675 16.3249 13.475 14.3083 12.1333C12.0249 10.6083 8.2666 10.6083 5.9666 12.1333Z"
                  stroke="#CCB391"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
