import Image from "next/image";
import React from "react";
import StatCard from "./StatCard";
import BlogSlider from "./BlogSlider";

const OurBlog = () => {
  const slides = [
    {
      image: "/assets/images/blog-img.png",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      buttonText: "Continue Reading",
      date: "Jul 17, 2024",
    },
    {
      image: "/assets/images/blog-img.png",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      buttonText: "Continue Reading",
      date: "Aug 02, 2024",
    },
    {
      image: "/assets/images/blog-img.png",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      buttonText: "Continue Reading",
      date: "Sep 15, 2024",
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="overlay_color mt-10">
                Trusted
                <span className="text_primary italic">
                  {" "}
                  Aesthetic <br />
                  Advice{" "}
                </span>
                Tailored for
                <span className="text_primary italic"> You </span>
              </h2>
              <div className="w-[60%]">
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
                <p className="mt-14">
                  Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                  fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <StatCard value="15K+" label="Happy Customers" />
              <StatCard value="FDA" label="Approved Technology" />
              <StatCard value="99%" label="Satisfaction Rate" />
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/doctor-image.png"
              alt="Description of image"
              width={800}
              height={300}
              className="object-cover"
              draggable="false"
            />
          </div>
        </div>
        <div className="my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="overlay_color">
                Our
                <span className="text_primary italic"> Blog </span>
              </h2>
            </div>
            <div>
              <p className="w-[80%] ms-auto">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
        </div>
        <BlogSlider slides={slides} />
      </div>
    </section>
  );
};

export default OurBlog;
