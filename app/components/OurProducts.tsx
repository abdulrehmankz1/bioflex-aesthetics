import React from "react";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  return (
    <section className="color_cream">
      <div className="container mx-auto py-10">
        <div className="w-full lg:w-[60%] text-center mx-auto">
          <div className="color_gold text-lg underline font-medium text-center">
            Our Products
          </div>
          <div className="w-full lg:w-[55%] mx-auto">
            <h2 className="overlay_color mt-6 q">
              Your Skin
              <span className="text_primary italic"> Deserves </span>
              the
              <span className="text_primary italic"> Best </span>
            </h2>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <button className="btn_primary py-2.5 px-6 mt-10 text-lg">
            View All Products
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            imageUrl="/assets/images/product-1.png"
            title="Luxury Skincare"
            price="$12.05"
            link="/product-details"
          />
          <ProductCard
            imageUrl="/assets/images/product-2.png"
            title="Body Treatment"
            price="$15.99"
            link="/product-details"
          />
          <ProductCard
            imageUrl="/assets/images/product-3.png"
            title="Body Treatment"
            price="$15.99"
            link="/product-details"
          />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
