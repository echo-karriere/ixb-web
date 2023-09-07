// For å legge til en ny logo, sjekk ut data/logo.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      <h2 className="text-gray-600 text-center pt-8 pb-4">
        Bedrifter som deltar:
      </h2>
      <div className="max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {logos.map((logo, index) => (
          <Link
            key={index}
            href={`/for-studenter/karrieredagene/bedrift/${logo.url}`}
            

            className="bg-gray-100 p-4 hover:bg-gray-200 h-24 max-w-24 flex items-center justify-center cursor-pointer">
            <Image
              src={logo.imgUrl}
              alt={logo.alt}
              width={100}
              height={100}
              layout="responsive"
              className="object-contain max-h-12 max-w-24"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default LogoGrid;
