import Link from "next/link";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import { useEffect, useState } from "react";
import React from "react";

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
      Vi har mottatt din stillingsannonse. En av våre styremedlemmer vil gå
      gjennom den før den publiseres. Du vil motta en e-post når
      stillingsannonsen er publisert, sammen med en referansekode som du kan
      bruke for å redigere eller slette stillingsannonsen.
    </div>
  );
};

export default function jobads() {
  return (
    <>
      <HeadSEO
        title="Administrer stillingsannonser | ITxBERGEN"
        description="Publiser stillingsannonser på ITxBERGEN sine nettsider helt kostnadsfritt."
        canonical="/for-bedrifter/stillingsannonser/"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <SuccessMessage />
          <div className="max-w-3xl">
            <h1>Administrer stillingsannonser</h1>
            <p>
              Publiser stillingsannonser på ITxBERGEN sine nettsider helt
              kostnadsfritt. Vi publiserer stillingsannonser for alle typer
              stillinger innenfor IT-bransjen, og vi har et stort publikum av
              IT-interesserte studenter og arbeidstakere.
            </p>
            <br />
            <a
              href={"https://airtable.com/appa8dZYt9s6GSS8K/shrEXkOYcPiAG7cDP"}
              className="border-2 py-4 px-4 my-5 hover:border-gray-400 rounded flex">
              <div>
                <span className="font-bold text-xl">➕</span>
                <br />
                <span className="font-bold text-xl">
                  Publiser en ny stillingsannonse
                </span>
                <br />
                Bruk dette skjemaet for å publisere en ny stillingsannonse. Vi
                går gjennom alle stillingsannonser før de publiseres.
              </div>
            </a>
            <Link
              href="/for-bedrifter/stillingsannonser/edit/"
              className="border-2 py-4 px-4 my-5 hover:border-gray-400 rounded flex">
              <div>
                <span className="font-bold text-xl">⚙️</span>
                <br />
                <span className="font-bold text-xl">
                  Rediger stillingsannonser{" "}
                </span>
                <br />
                For deg som allerede har publisert en stillingsannonse og ønsker
                å endre på den, eller fjerne den.
              </div>
            </Link>
          </div>
          <br />
        </div>
      </main>
    </>
  );
}
