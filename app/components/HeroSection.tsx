"use client";

import Image from "next/image";
import React, { useState } from "react";
import Select, { StylesConfig, SingleValue } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const timeSlotOptions: OptionType[] = [
  { value: "9-11", label: "Morning (9:00 AM - 11:00 AM)" },
  { value: "1-3", label: "Afternoon (1:00 PM - 3:00 PM)" },
  { value: "5-7", label: "Evening (5:00 PM - 7:00 PM)" },
];

const concernOptions: OptionType[] = [
  { value: "acne", label: "Acne" },
  { value: "hairfall", label: "Hair Fall" },
  { value: "darkspots", label: "Dark Spots" },
];

// 👇 Custom placeholder styling
const customSelectStyles: StylesConfig<OptionType> = {
  placeholder: (base) => ({
    ...base,
    color: "#8A8A8A",
    fontWeight: 300,
    paddingLeft: "8px",
    fontSize: "14px",
  }),
  control: (base) => ({
    ...base,
    borderRadius: "6px",
    borderColor: "#ccc",
    minHeight: "42px",
    fontWeight: 300,
    fontSize: "14px",
  }),
};

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTime, setSelectedTime] = useState<OptionType | null>(null);
  const [selectedConcern, setSelectedConcern] = useState<OptionType | null>(
    null
  );
  const [errors, setErrors] = useState({
    email: false,
    phone: false,
    time: false,
    concern: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: email.trim() === "",
      phone: phone.trim() === "",
      time: selectedTime === null,
      concern: selectedConcern === null,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((v) => v);
    if (!hasErrors) {
      console.log("Form submitted:", {
        email,
        phone,
        selectedTime,
        selectedConcern,
      });
      // submit form
    }
  };

  return (
    <section className="hero_section px-4 sm:px-5 md:px-6 lg:px-10 mt-4 lg:mt-5">
      <div className="background-wrapper relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[50%] text-center lg:text-start">
              <h1 className="font-nineties text_muyted">
                Glow{" "}
                <strong className="text_primary italic">
                  Naturally, Shine
                </strong>{" "}
                Confidently
              </h1>
              <p className="fs-16 pt-6 text-center lg:text-justify font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo
                <br />
                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                magnis
                <br />
                dis parturient montes, nascetur ridiculus mus.
              </p>

              <Image
                className="w-full lg:w-auto relative lg:absolute end-0 bottom-0 mx-auto"
                src="/assets/images/hero_img.svg"
                alt="hero-section-image"
                width={710}
                height={720}
              />

              <div
                className="book-appointment-container mt-[24px] lg:mt-[50px] mb-[20px] lg:mb-[44px]"
                id="appointment-section"
              >
                <h5 className="text-dark font-medium text-start">
                  Book a Free Appointment
                </h5>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2 lg:gap-y-4 pt-2.5">
                    <div className="flex gap-x-2.5 gap-y-3">
                      <div className="w-full">
                        <input
                          className="w-full form-control placeholder:text-[#8A8A8A] placeholder:font-light placeholder:ps-2"
                          type="email"
                          placeholder="Your E-mail Address"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 ms-2">
                            Email is required
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <input
                          className="w-full form-control placeholder:text-[#8A8A8A] placeholder:font-light placeholder:ps-2"
                          type="tel"
                          placeholder="Contact Number"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1 ms-2">
                            Phone number is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 lg:gap-x-[10px] lg:gap-y-3 pt-2">
                    <div className="w-full">
                      <Select<OptionType, false>
                        styles={customSelectStyles}
                        classNamePrefix="dropdown-select"
                        options={timeSlotOptions}
                        placeholder="Select Time Slot"
                        value={selectedTime}
                        onChange={(option) => setSelectedTime(option)} 
                      />

                      {errors.time && (
                        <p className="text-red-500 text-sm mt-1 ms-2">
                          Please select a time slot
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <Select<OptionType, false>
                        styles={customSelectStyles}
                        classNamePrefix="dropdown-select"
                        options={concernOptions}
                        placeholder="Treatment Concern"
                        value={selectedConcern}
                        onChange={(option) => setSelectedConcern(option)}
                      />

                      {errors.concern && (
                        <p className="text-red-500 text-sm mt-1 ms-2">
                          Please select a concern
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 btn_primary"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
