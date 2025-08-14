import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto mb-7">
        <div className="banner_box p-[60px] pb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text_primary italic">
                Your Glow-Up Begins Without the Price Tag
              </h2>
            </div>
            <div>
              <p className="text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                facere optio porro sed illo, corrupti consequatur ipsum neque
                enim at adipisci voluptatum commodi quis provident omnis sit
                laborum odit ullam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor facere optio porro sed illo, corrupti
                consequatur ipsum neque enim at adipisci voluptatum commodi quis
                provident omnis sit laborum odit ullam.
              </p>
              <div className="flex items-center justify-end gap-3 mt-5">
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
          <div className="flex items-end justify-center mt-[350px]">
            <button className="btn_primary py-4 px-10 text-xl shadow-2xl">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
