// ServiceCards.jsx
"use client";
import React, { useState } from "react";

const ServiceCard = ({ title, description, image,link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-72 h-96 m-4 rounded-lg overflow-hidden bg-cover bg-center transition-transform transform "
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-purple-900 opacity-60"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 transition-opacity duration-300">
        {!hovered ? (
          <h2 className="text-2xl font-bold uppercase">{title}</h2>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:border-purple-600 hover:text-purple-600 transition">
              Learn More
            </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "Polishing",
      description:
        "Remove imperfections and restore the original gloss of your vehicle.",
      image: "/images/paint-updated.jpeg",
      link:"/services/polishing"
    },
    {
      title: "Ceramic Coating",
      description: "Protect your vehicle with a high-quality ceramic coating.",
      image: "/path-to-ceramic-coating.jpg",
      link:"/services/ceramic-coating"
    },
    {
      title: "Interior Detailing",
      description: "Convenient detailing services brought directly to you.",
      image: "/path-to-mobile-detailing.jpg",
      link:"/services/interior-detailing"
    },
  ];

  return (
    <div className="flex flex-wrap justify-center  py-8 px-4">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default ServiceCards;
