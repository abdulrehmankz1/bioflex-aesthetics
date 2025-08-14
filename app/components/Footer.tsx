import { ArrowRight } from "lucide-react";
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
      <footer className="border-t border-gray-300 bg-white text-gray-800">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-4">Logo</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes.
              </p>
            </div>
            <div className="flex gap-6 mt-6 text-sm text-gray-500">
              <a href="#">Terms & Condition</a>
              <a href="#">Privacy & Policy</a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h5 className="mb-4 font_poppins">Information</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#">About Store</a>
              </li>
              <li>
                <a href="#">Product & Provide</a>
              </li>
              <li>
                <a href="#">Pricing List</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="mb-4 font_poppins">Useful Links</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Forum</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col justify-between">
            <div>
              <h5 className="mb-4 font_poppins">Contact Us</h5>
              <div className="flex items-center gap-3 mt-5">
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
            <p className="text-xs text-gray-500 mt-6">
              © 2025 Lalu. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
