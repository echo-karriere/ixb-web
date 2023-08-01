import Link from "next/link";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import { useEffect, useState } from "react";

// brukes for å generere en tilfeldig referansekode
const randomAlphanumeric = (length: number) => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const randomNumber = Math.floor(Math.random() * (99 - 10 + 1) + 10);
const referansekode = randomAlphanumeric(10) + "-" + randomNumber;

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
      Vi har mottatt ditt varsel. Logg inn med referansekoden du fikk når du
      sendte inn ditt varsel for å lese svar på varselet, eller for å se
      bekreftelse på at vi har mottatt ditt varsel.
    </div>
  );
};

export default function whistleblower() {
  return (
    <>
      <HeadSEO
        title="ITxBergen Debug | ITxBERGEN"
        description="ITxBergen Debug lar deg melde i fra kritikkverdig atferd på ITxBERGEN sine arrangementer."
        canonical="/debug"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <SuccessMessage />
          <div className="max-w-3xl">
            <h1>ITxBergen DEBUG🐞</h1>
            <p>
              ITxBergen Debug kan ikke hjelpe deg med å fikse feil i koden din,
              men er en tjeneste som lar deg melde i fra uønskede hendelser på
              ITxBERGEN sine arrangementer. Klikk på send inn varsel for mer
              info, eller for å sende inn et varsel. Du kan også logge inn for å
              lese svar på varsel med referansekoden du fikk når du sendte inn
              ditt varsel.
            </p>
            <br />
            <a
              href={
                "https://airtable.com/appnLJzoJaa64xfK5/shrZS2ausM3GYjnsG?prefill_Referansekode=" +
                referansekode
              }
              className="border-2 py-4 px-4 my-5 hover:border-gray-400 rounded flex">
              <div>
                <span className="font-bold text-xl">📝</span>
                <br />
                <span className="font-bold text-xl">Send inn nytt varsel</span>
                <br />
                Bruk dette skjemaet for å sende inn et nytt varsel. Du vil motta
                en referansekode som du kan bruke for å lese svar på varselet.
              </div>
            </a>
            <Link
              href="/debug/logg-inn/"
              className="border-2 py-4 px-4 my-5 hover:border-gray-400 rounded flex">
              <div>
                <span className="font-bold text-xl">🔑</span>
                <br />
                <span className="font-bold text-xl">Logg inn</span>
                <br />
                Logg inn for å lese svar på varsel med referansekoden du fikk
                når du sendte inn ditt varsel.
              </div>
            </Link>
            <Link
              href="/sifra"
              className="border-2 py-4 px-4 my-5 hover:border-gray-400 rounded flex">
              <div>
                <span className="font-bold text-xl">📣</span>
                <br />
                <span className="font-bold text-xl">
                  Flere varslingskanaler
                </span>
                <br />
                Vi er ikke den eneste du kan varsle til. Om du føler deg mer
                komfortabel med å varsle til en annen instans kan du gjøre det.
                Sjekk ut si fra sidene våre for mer informasjon.
              </div>
            </Link>
          </div>
          <br />
        </div>
      </main>
    </>
  );
}
