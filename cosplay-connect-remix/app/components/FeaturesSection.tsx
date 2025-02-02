// app/components/FeaturesSection.tsx

import type { FC, MouseEvent } from "react";
import React from "react";
import { Link } from "@remix-run/react";
// or import { Link } from "react-router-dom";
// whichever you use in Remix:
import type { IconType } from "react-icons";
import {
  FaUserEdit,
  FaSearch,
  FaCalendarCheck,
  FaInstagram,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";

type FeatureCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

const FeatureCard: FC<FeatureCardProps> = ({
  icon: IconComponent,
  title,
  description,
}) => {
  return (
    <div className="w-80 bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center items-center mb-4 text-indigo-600 text-4xl">
        <IconComponent />
      </div>
      <h3 className="text-xl font-bold mb-2 text-indigo-600">{title}</h3>
      <p className="text-gray-600 font-semibold">{description}</p>
    </div>
  );
};

const features: FeatureCardProps[] = [
  {
    icon: FaUserEdit,
    title: "Create Your Profile",
    description: "Showcase your cosplay portfolio or photography work in one place.",
  },
  {
    icon: FaSearch,
    title: "Connect",
    description: "Easily search for cosplayers or photographers that match your style and taste.",
  },
  {
    icon: FaCalendarCheck,
    title: "Book a Shoot",
    description: "Schedule your photo sessions ahead of conventions with ease!",
  },
];

const FeaturesSection: FC = () => {
  // Temporarily remove scroll code to isolate the error:
  const scrollToSignup = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      document.querySelector("#signup")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <div id="how-it-works-anchor" className="h-16 -mt-16" />

      <h2 id="how-it-works" className="text-4xl font-extrabold text-gray-800 mb-12">
        How It Works
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="mt-12 w-80 mx-auto bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-4 text-indigo-600">
          Seamless Social Media Integration
        </h3>
        <p className="text-gray-600 mb-4 font-semibold">
          Link your <strong>Instagram</strong>, <strong>Facebook</strong>, and{" "}
          <strong>Discord</strong> accounts to showcase your portfolio instantly.
        </p>
        <div className="flex justify-center gap-6 text-indigo-600 text-3xl">
          <FaInstagram aria-label="Instagram" role="img" />
          <FaFacebook aria-label="Facebook" role="img" />
          <FaDiscord aria-label="Discord" role="img" />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/create-profile"
          // onClick={scrollToSignup}
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 
                     rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Join the Beta
        </Link>
      </div>
    </section>
  );
};

export default FeaturesSection;
