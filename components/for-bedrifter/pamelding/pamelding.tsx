import React, { useEffect, useState } from "react";

export default function PameldingInfo() {
  const [companyName, setCompanyName] = useState("");

  const handleCompanyNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCompanyName(e.target.value);
  };

  const handleContinueClick = () => {
    const encodedCompanyName = encodeURIComponent(companyName);
    const url = `https://airtable.com/appKTqxd4DOQ3ykmw/shrSbJDV5stXE4Q5I?prefill_Bedrift=${encodedCompanyName}`;
    window.open(url);
  };

  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="max-w-3xl">
        <h1>Påmelding til ITxBERGEN sine karrieredager 2024</h1>
        <p>
          Påmeldingen til Karrieredagene 2024 har ikke åpnet enda, men du kan
          allerede nå melde din interesse ved å skrive inn bedriftens navn
          nedenfor og trykke på "Fortsett". Du vil bli sendt videre til en side
          hvor du kan legge inn en e-post hvor vi kan kontakte dere når
          påmeldingen åpner.
        </p>
        <br />
        <form>
          <label htmlFor="companyName">Bedriftens navn</label>
          <br />
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={handleCompanyNameChange}
            required
            className="w-1/2 border border-gray-500 px-3 py-2 mt-1 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <br />
          <button
            disabled={companyName === ""}
            onClick={handleContinueClick}
            className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500">
            Fortsett
          </button>
        </form>
      </div>
    </div>
  );
}
