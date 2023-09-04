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
  const handleLogoClick = (logoUrl: string, alt: string) => {
    const confirmation = window.confirm(
      `Du forlater nå nettsidene til ITxBergen, og vil bli sendt videre til ${alt} sin nettside. Ønsker du å fortsette?`
    );

    if (confirmation) {
      window.open(logoUrl, "_blank");
    }
  };

  const handleLogoKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    logoUrl: string,
    alt: string
  ) => {
    if (event.key === "Enter") {
      handleLogoClick(logoUrl, alt);
    }
  };

  return (
    <>
      <h2 className="text-gray-600 text-center pt-8 pb-4">
        Bedrifter som deltar:
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 hover:bg-gray-200 h-24 max-w-24 flex items-center justify-center cursor-pointer"
            onClick={() => handleLogoClick(logo.url, logo.alt)}
            tabIndex={0} // Make the logo focusable
            onKeyDown={(e) => handleLogoKeyPress(e, logo.url, logo.alt)} // Handle Enter key press
          >
            <Image
              src={logo.imgUrl}
              alt={logo.alt}
              width={100}
              height={100}
              layout="responsive"
              className="object-contain max-h-12 max-w-24"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default LogoGrid;
