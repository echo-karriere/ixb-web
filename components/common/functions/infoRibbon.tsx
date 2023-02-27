/*
Info ribbon component
@param {string} text - the text to be displayed in the ribbon
@returns {JSX.Element} - the info ribbon
@example
<InfoRibbon text="Dette er en info-ribbon" />
*/

import "remixicon/fonts/remixicon.css";

interface InfoRibbonProps {
  text: string;
}

export function InfoRibbon({ text }: InfoRibbonProps) {
  return (
    <div className="w-full bg-blue-200">
      <div className="max-w-7xl py-3 w-11/12 mx-auto">
        <i className="ri-error-warning-line text-2xl"></i>
        <p>{text}</p>
      </div>
    </div>
  );
}
