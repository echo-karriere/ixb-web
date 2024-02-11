import React, { useState } from "react";
import Link from "next/link";

export default function PameldingSuccess() {
  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="max-w-3xl">
        <h1>Bedriften er nå påmeldt ITxBERGEN sin karrieredag</h1>
        <p>
          Vi har nå motatt deres påmelding til ITxBERGEN sin karrieredag 2024.
          Dere vil snart motta en e-post bekreftelse på dette innen 5 minutter.
          Om dere ikke skulle motta e-posten, vennligst sjekk spam-mappen,
          eller ta kontakt med oss på{" "}
          <Link
            href="mailto:kontakt@itxbergen.no"
            className="underline text-blue-500 hover:text-blue-700">
            kontakt@itxbergen.no
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
