import Image from "next/image";
import React from "react";

interface TreatmentsSliderProps {
  direction?: "left" | "right"; // default: left
  speed?: number; // seconds for one loop
}

const TreatmentsSlider: React.FC<TreatmentsSliderProps> = ({
  direction = "left",
  speed = 25,
}) => {
  const items = [
    { type: "text", value: "Aesthetic" },
    { type: "image", value: "/assets/images/slider-1.png" },
    { type: "text", value: "Skin-care" },
    { type: "image", value: "/assets/images/slider-1.png" },
    { type: "text", value: "PRP Therapy" },
    { type: "image", value: "/assets/images/slider-1.png" },
    { type: "text", value: "Consultation" },
    { type: "image", value: "/assets/images/slider-1.png" },
    { type: "text", value: "Treatments" },
    { type: "image", value: "/assets/images/slider-1.png" },
    { type: "text", value: "Therapy" },
    { type: "image", value: "/assets/images/slider-1.png" },
    { type: "text", value: "Skin-care" },
    { type: "image", value: "/assets/images/slider-1.png" },
    { type: "text", value: "Treatments" },
    { type: "image", value: "/assets/images/slider-1.png" },
  ];

  const loopItems = [...items, ...items];

  return (
    <section className="overflow-hidden w-full">
      <div className="marquee mb-6">
        <div
          className={`marquee-track ${direction === "right" ? "reverse" : ""}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {loopItems.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex items-center justify-center border border-[#911E3D4D] rounded-xl w-fit h-fit text_primary me-3 ${
                item.type === "text" ? "px-5 py-3" : ""
              }`}
            >
              {item.type === "text" ? (
                <h2 className="mb-0 whitespace-nowrap">{item.value}</h2>
              ) : (
                <Image
                  src={item.value}
                  alt={`Slider item ${index}`}
                  draggable="false"
                  width={200}
                  height={100}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSlider;
