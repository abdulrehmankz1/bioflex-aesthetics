"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

interface BlogSlide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  date: string;
}

interface BlogSliderProps {
  slides: BlogSlide[];
}

function BlogSlider({ slides }: BlogSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const initialIndex = Math.floor(slides.length / 2);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  return (
    <div className="blog-slider-container">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.slideTo(initialIndex, 0);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row gap-14">
              {/* Left Side: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* Right Side: Text */}
              <div className="w-full md:w-1/2">
                <div className="font-light mt-5">{slide.date}</div>
                <h3 className="mt-4 mb-10">{slide.title}</h3>
                <p className="mb-16">{slide.description}</p>
                <button className="btn_primary py-3 px-6 text-lg">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`w-[150px] h-3 rounded-full transition cursor-pointer ${
              activeIndex === index ? "bg-[#911E3D]" : "bg-[#EDE9E2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogSlider;
