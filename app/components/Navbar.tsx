"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";

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
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <Link href="#" className="nav_item active" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="nav_item">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="nav_item">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="nav_item">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="nav_item">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="nav_item">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
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
          </div>

          {/* Tablet & Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
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
            <button
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:hidden mt-4 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col space-y-4 py-4">
            <li>
              <Link
                href="#"
                className="block py-2 nav_item active"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 nav_item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 nav_item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 nav_item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 nav_item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 nav_item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Articles
              </Link>
            </li>
            <li className="pt-4">
              <button
                className="btn_primary py-2.5 px-6 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
