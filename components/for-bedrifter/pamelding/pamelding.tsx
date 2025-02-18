import Link from "next/link";
import React, { useState } from "react";

export default function PameldingInfo() {
  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="max-w-3xl">
        <h1>Påmelding til ITxBERGEN sine karrieredag 2025</h1>
        <p>
          Påmeldingen til ITxBergen sin karrieredag 2025 er nå åpen. Benytt deg
          av ITxBergen DELTA for å melde bedriften på karrieredagen, eller for å
          sjekke status på påmeldingen. Ønsker du mer informasjon, så kan du ta
          en titt på invitasjonen.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
            href="https://invitasjon.ixb.no">
            Les invitasjonen
          </Link>
          <Link
            className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
            href="https://delta.itxbergen.no">
            Gå til ITxBergen DELTA
          </Link>
        </div>
      </div>
    </div>
  );
}
