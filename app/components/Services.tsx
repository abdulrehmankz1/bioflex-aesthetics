import Image from "next/image";
import React from "react";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    imageUrl: "/assets/images/service-1.png",
    link: "/another-page",
    tags: [
      "3 Session",
      "1 Session per month",
      "Prices Starting from 12000 PKR",
    ],
    title: "Facial Rejuvenation",
    description:
      "Restore your skin's natural glow with our advanced facial treatments.",
  },
  {
    imageUrl: "/assets/images/service-2.png",
    link: "/details",
    tags: [
      "3 Session",
      "1 Session per month",
      "Prices Starting from 12000 PKR",
    ],
    title: "Body Contouring",
    description:
      "Achieve your desired shape with non-invasive body contouring solutions.",
  },
  {
    imageUrl: "/assets/images/service-3.png",
    link: "/details",
    tags: [
      "3 Session",
      "1 Session per month",
      "Prices Starting from 12000 PKR",
    ],
    title: "Hair Restoration",
    description:
      "Regain your confidence with our innovative hair restoration treatments.",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
          <div>
            <Image
              src="/assets/images/sparkle_line.png"
              alt="Sparkle Line"
              className="mt-10"
              draggable="false"
              width={300}
              height={80}
            />
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="my-10">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo.
            </p>
            <button className="btn_primary py-2.5 px-6">
              View All Services
            </button>
          </div>
        </div>

        {/* Cards rendered with map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {servicesData.map((service, index) => (
            <ServicesCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
