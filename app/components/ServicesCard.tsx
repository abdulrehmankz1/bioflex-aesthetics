import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ServicesCardProps {
  imageUrl: string;
  link: string;
  tags: string[];
  title: string;
  description: string;
}

export default function ServicesCard({
  imageUrl,
  link,
  tags,
  title,
  description,
}: ServicesCardProps) {
  return (
    <div>
      {/* Card image with gradient overlay */}
      <div
        className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 78%, rgba(0, 0, 0, 0.80) 100%), url('${imageUrl}') lightgray 50% / cover no-repeat`,
        }}
      >
        {/* Top-right arrow button */}
        <Link href={link} className="service-card__arrow-btn">
          <ArrowUpRight size={34} />
        </Link>

        {/* Bottom tags */}
        <div className="service-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="service-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title and description */}
      <div className="mt-3.5">
        <h5 className="text-lg font-medium text-dark">{title}</h5>
        <p className="text-base font-light text_secondary">{description}</p>
      </div>
    </div>
  );
}
