import React from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  link: string;
}

export default function ProductCard({
  imageUrl,
  title,
  price,
  link,
}: ProductCardProps) {
  return (
    <div className="mt-12 group cursor-pointer">
      {/* Image wrapper with hover zoom */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full">
        <div
          className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          style={{
            background: `url('${imageUrl}') lightgray 50% / cover no-repeat`,
          }}
        />
        {/* Top-right heart icon */}
        <button
          className="absolute top-3 right-3 bg-[#FFFFFF80] p-3 hover:bg-white text-[#911E3D] rounded-full transition cursor-pointer"
          aria-label="Add to wishlist"
        >
          <Heart size={40} />
        </button>
      </div>

      {/* Content */}
      <div className="mt-1.5 p-5 bg-[#FBFBFB] border border-[#EAEAEA] shadow-xs rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h5 className="text-lg font-medium text-dark">{title}</h5>
            <Link
              href={link}
              className="text-lg font-light text_secondary hover:underline flex items-center gap-2.5"
            >
              <span>Details</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="text_dark text-4xl font_behind">{price}</div>
        </div>
      </div>
    </div>
  );
}
