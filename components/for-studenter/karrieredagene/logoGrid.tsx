// For å legge til en ny logo, sjekk ut data/logo.tsx

import React from "react";
import Image from "next/image";

interface Logo {
  imgUrl: string;
  alt: string;
  url: string;
}

interface LogoGridProps {
  logos: Logo[];
}

const LogoGrid: React.FC<LogoGridProps> = ({ logos }) => {
  return (
    <>
      <h2 id="attending" className="text-gray-800 text-center pt-8">
        Bedrifter som deltar:
      </h2>
      

      <div className="max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-4 hover:bg-gray-200 h-24 max-w-24 flex items-center justify-center cursor-pointer">
            <Image
              src={logo.imgUrl}
              alt={logo.alt}
              width={100}
              height={100}
              layout="responsive"
              className="object-contain max-h-12 max-w-24"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default LogoGrid;
