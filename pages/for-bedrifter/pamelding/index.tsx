import type { NextPage } from "next";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Pamelding from "../../../components/for-bedrifter/pamelding/pamelding";
import { useEffect, useState } from "react";

const SuccessMessage = () => {
  // State to hold the visibility of the success message
  const [isSuccess, setIsSuccess] = useState(false);

  // Function to check if the URL contains "?success=true"
  const isUrlParamTrue = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("success") === "true";
  };

  useEffect(() => {
    // Set the state based on the URL parameter when the component mounts
    setIsSuccess(isUrlParamTrue());
  }, []);

  return (
    // Render the success message based on the state
    <div
      id="success-message"
      className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6 max-w-3xl rounded relative ${
        isSuccess ? "block" : "hidden"
      }`}>
      Vi har mottatt deres interesse for å delta på Karrieredagene 2024. Vi vil
      kontakte dere når påmeldingen åpner.
    </div>
  );
};
const ApplyCarrerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Påmelding til ITxBERGEN sine karrieredager 2024"
        description="Ønsker du og din bedrift å være med på ITxBERGEN sin karrieredag i 2024? Her kan du melde dere på."
        canonical="/for-bedrifter/pamelding"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <SuccessMessage />
        </div>
        <Pamelding />
      </main>
    </div>
  );
};

export default ApplyCarrerFair;
