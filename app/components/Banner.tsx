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
            </div>
          </div>
          <div className="flex items-end justify-center mt-[350px]">
            <button className="btn_primary py-3 px-6 text-lg">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
