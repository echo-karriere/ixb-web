import React, { useState } from "react";
import Link from "next/link";

export default function PameldingBekreft() {
  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="max-w-3xl">
        <h1>Før du går videre til påmeldingen...</h1>
        <p>
          Før dere starter påmeldingen, ønsker vi at dere har lest og forstått
          avtale- og påmeldingsvilkårene for ITxBERGEN sin karrieredag 2024.
        </p>
        <br />
        <Link
          href={"https://ixb.no/files/kontrakt.pdf"}
          target="_blank"
          className="underline text-blue-500 hover:text-blue-700">
          Åpne avtale- og påmeldingsvilkårene i ny fane
        </Link>
        <br />
        <br />
        <Link
          href="https://skjema.ixb.no/karrieredagene2024"
          className="bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500">
          Fortsett
        </Link>
        <br />
      </div>
    </div>
  );
}
