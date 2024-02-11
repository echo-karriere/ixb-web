import React, { useState } from "react";
import Link from "next/link";

export default function PameldingInfo() {
  const [company, setCompany] = useState("");

  const handleCompanyNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCompany(e.target.value);
  };

  const handleContinueClick = () => {
    const encodedCompanyName = encodeURIComponent(company);
    const url = `https://skjema.ixb.no/status?ref=${encodedCompanyName}`;
    // only open the link if the input contains 9 digits
    if (company.length === 9) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="max-w-3xl">
        <h1>Påmelding til ITxBERGEN sine karrieredag 2024</h1>
        <p>
          Påmeldingen til ITxBERGEN sin karrieredag den 19. september 2024 er nå
          åpen for bedrifter. En ypperlig mulighet til å møte
          IT-studenter fra Universitetet i Bergen, Høgskulen på Vestlandet,
          Kristiania og Noroff.
        </p>
        <br />
        <Link
          href="/for-bedrifter/pamelding/bekreft"
          className="bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500">
          Gå til påmelding
        </Link>
        <br />
        <h2 className="mt-10">Er bedriften allerede påmeldt?</h2>
        <p>
          Tidligere har vi fått en del spørsmål der enkelte har lurt på om
          bedriften allerede er påmeldt eller ønsker en bekreftelse på at de er
          påmeldt. Skriv inn bedriftens organisasjonsnummer i feltet under for å
          sjekke om bedriften er påmeldt. 9-siffer og uten mellomrom.
        </p>
        <br />
        <form>
          <label htmlFor="company">
            <b>Organisasjonsnummer</b>
          </label>
          <br />
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={handleCompanyNameChange}
            pattern="[0-9]{9}"
            required
            className="w-1/2 border border-gray-500 px-3 py-2 mt-1 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <br />
          <button
            // only send if browser validates the input
            type="submit"
            // if browser validates the input, send the form
            onClick={handleContinueClick}
            className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500">
            Fortsett
          </button>
        </form>
        <h2 className="mt-10">Ettersend informasjon</h2>
        <p>
          Alle bedriftene må ettersende logo i vektor format (eksempelvis en
          .SVG fil). Om dere skal delta på konesptpresentasjon eller workshop,
          så sender dere en e-post til oss på{" "}
          <Link
            href="mailto:kontakt@itxbergen.no"
            className="underline text-blue-500 hover:text-blue-700">
            kontakt@itxbergen.no
          </Link>{" "}
          for å avklare tema, samt få lagt ut informasjon på nettsiden vår om
          hva som er innholdet i workshopen eller konseptpresentasjonen.
          Absolutt siste frist for dette er 1. september. På valg av tema er det
          førstemann til mølla prinsippet.
        </p>
      </div>
    </div>
  );
}
