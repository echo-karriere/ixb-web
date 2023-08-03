import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import React from "react";

export default function jobadsedit() {
  return (
    <>
      <HeadSEO
        title="Rediger stillingsannonser | ITxBERGEN"
        description="Rediger stillingsannonser på ITxBERGEN sine nettsider"
        canonical="/for-bedrifter/stillingsannonser/edit"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>Denne tjenesten er ikke helt ferdig ennå.</h1>

            <p>
              Vi er ikke helt klare til å lansere denne tjenesten ennå. Send en
              epost til sebastian.helgesen@itxbergen.no om du skulle hatt behov
              for å endre noe på stillingsannonsen deres.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
