import { HeadSEO } from "../../components/common/functions/HeadSEO";
import React, { useEffect, useState } from "react";
import CreateAccount from "../../components/pluss/createAccount";
import AboutPluss from "../../components/pluss/aboutPluss";
import Link from "next/link";
import secureLocalStorage from "react-secure-storage";

const Plus = () => {
  const [userName, setUserName] = useState("");
  const [isPlus, setIsPlus] = useState(false);

  useEffect(() => {
    const userNameFromLocalStorage =
      secureLocalStorage.getItem("userName")?.toString() ?? "";
    setUserName(userNameFromLocalStorage);
    if (
      secureLocalStorage.getItem("userName") &&
      secureLocalStorage.getItem("userPIN")
    ) {
      setIsPlus(true);
    }
  }, []);

  return (
    <>
      <HeadSEO
        title="ITxBERGEN PLUSS+"
        description="Få tilgang til eksklusive funksjoner på ITxBERGEN sine nettsider med en PLUSS+ konto."
        canonical="/pluss"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            {isPlus ? (
              <>
                <h1>
                  Hallaien, {userName}!{" "}
                  <span className="bg-yellow-300 text-yellow-700 font-bold text-xs rounded-full px-2">
                    PLUSS+
                  </span>
                </h1>
                <p>
                  Din PLUSS+ konto er aktivert i denne nettleseren. En PLUSS+
                  konto er kun tilgjengelig lokalt i nettleseren du oppretter
                  den i. Derfor må du opprette en ny PLUSS+ konto i hver
                  nettleser du bruke våre PLUSS+ tjenester.
                </p>
                <h2>Rediger brukerkonto</h2>
                <p>
                  Skulle du ha behov for å redigere enten navnet eller PIN koden
                  din kan du gjøre dette her.
                </p>
                <br />
                <Link
                  href="/pluss/edit"
                  className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
                  Kontoinnstillinger
                </Link>
                <br />
                <br />
                <h2>Slett lokal PLUSS+ konto, eller glemt PIN kode</h2>
                <p>
                  Ønsker du å slette din PLUSS+ konto kan du gjøre det her. Har
                  du glemt PIN koden din må du først slette din PLUSS+ konto og
                  deretter opprette en ny konto. Vær oppmerksom på at du mister
                  all data som er lagret.
                </p>

                <button
                  onClick={() => {
                    confirm(
                      "Er du sikker på at du ønsker å slette din PLUSS+ konto? Ved å gjøre dette mister du det du har lagret på din PLUSS+ konto. Handlingen kan ikke angres."
                    ) && localStorage.clear();
                    window.location.reload();
                  }}
                  className="bg-gray-700 text-white rounded shadow-md w-44 px-4 py-2 mt-4 hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 cursor-pointer  focus:ring-red-500">
                  Slett PLUSS+ konto
                </button>
              </>
            ) : (
              <>
                <AboutPluss />
                <CreateAccount />
              </>
            )}
          </div>

          <br />
        </div>
      </main>
    </>
  );
};

export default Plus;
