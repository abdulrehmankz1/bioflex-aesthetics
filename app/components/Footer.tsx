import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="border-t border-b border-[#DFDFDF] mb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div className="ps-14 border-r-2 border-[#DFDFDF] py-6">
              <div>
                <h5 className="font-light text-[#8B8B8B !important]">
                  Call Center
                </h5>
                <div className="mt-3 text-xl text_primary">+123-456-7890,</div>
                <div className="text-xl text_primary">+123-456-7890,</div>
              </div>
            </div>
            <div className="ps-14 border-r-2 border-[#DFDFDF] py-6">
              <div>
                <h5 className="font-light text-[#8B8B8B]">E-mail Address</h5>
                <div className="mt-3 text-xl text_primary">
                  your_mail@mail.com
                </div>
              </div>
            </div>
            <div className="ps-14 border-r-2 border-[#DFDFDF] py-6">
              <div>
                <h5 className="font-light text-[#8B8B8B]">Our locations</h5>
                <div className="mt-3 text-xl text_primary">Karachi</div>
                <div className="text-xl text_primary">Lahore</div>
                <div className="text-xl text_primary">Islamabad</div>
              </div>
            </div>
            <div className="ps-14 border-r-2 border-[#DFDFDF] py-6">
              <div>
                <h5 className="font-light text-[#8B8B8B]">Newsletter</h5>
                <form action="">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Your E-mail Address"
                    className="border border-[#DFDFDF] rounded-md p-2"
                  />
                  <button
                    type="submit"
                    className="btn_primary py-2 px-12 mt-3 text-lg flex items-center gap-4"
                  >
                    Subscribe
                    <ArrowRight size={20} color="white" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="">
        {/* new container */}
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-y-6 px-6 py-10 text-dark-gray">
            {/* Logo & Description */}
            <div className="w-full lg:w-[30%] me-auto order-first">
              <div>
                <Link href="#">
                  <Image
                    src="/assets/images/logo.svg"
                    alt="Description of image"
                    draggable="false"
                    width={150}
                    height={50}
                    className="mb-2"
                  />
                </Link>
                <p className="leading-relaxed text-dark-gray font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes.
                </p>
              </div>
            </div>

            {/* Information */}
            <div className="w-[50%] lg:w-[20%] pe-8">
              <h5 className="mb-5 font_poppins">Information</h5>
              <ul className="space-y-2 text-dark-gray font-light list-none">
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    About Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    Product & Provide
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    Pricing List
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="w-[50%] lg:w-[20%]">
              <h5 className="mb-5 font_poppins">Useful Links</h5>
              <ul className="space-y-2 text-dark-gray font-light list-none">
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <ChevronRight size={16} />
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="hidden lg:block w-full lg:w-[18%]">
              <div className="flex flex-col justify-between">
                <h5 className="mb-5 font_poppins">Contact Us</h5>
                <div className="flex items-center gap-3">
                  <Link href="#">
                    <Image
                      src="/assets/images/google-icon.png"
                      alt="Description of image"
                      draggable="false"
                      width={35}
                      height={35}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/assets/images/facebook-icon.png"
                      alt="Description of image"
                      draggable="false"
                      width={35}
                      height={35}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/assets/images/twitter-icon.png"
                      alt="Description of image"
                      draggable="false"
                      width={35}
                      height={35}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/assets/images/linkedin-icon.png"
                      alt="Description of image"
                      draggable="false"
                      width={34}
                      height={34}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-dark-gray mb-10">
            <div>
              <Link href="#" className="hover:underline me-20">
                Terms & Condition
              </Link>
              <Link href="#" className="hover:underline">
                Privacy & Policy
              </Link>
            </div>
            <div>
              <Link href="#">
               © 2025 Laluna. All Rights Reserved
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
