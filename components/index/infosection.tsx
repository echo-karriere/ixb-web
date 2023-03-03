import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function Infosection() {
  return (
     <><div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl shadow-lg p-4 md:p-6 text-white bg-gradient-to-r from-[#7451aa] to-[#687ae4]">
          <h2>Snittkalkulator</h2>
          <p className="-mt-2">
            Usikker på hva snittet ditt er? Bruk vår snittkalkulator for å
            regne ut snittet ditt.
          </p>
          <br />
          <Link
            className="bg-white text-[#7451aa] shadow-md rounded-full px-4 py-2 mt-4 hover:bg-[#0f0f0f] hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
            href="/for-studenter/snittkalkulator">
            Regn ut snittet ditt
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-xl shadow-lg text-white p-4 md:p-6 bg-gradient-to-r from-red-800 to-red-500">
            <h2>Stillingsannonser</h2>
            <p className="-mt-2">
              Vi publiserer stillingsannonser fra bedrifter som er på utkikk
              etter IT-studenter og nyutdannede.
            </p>
            <br />
            <Link
              className="bg-white text-red-800 rounded-full shadow-md px-4 py-2 mt-4 hover:bg-[#0f0f0f] hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
              href="/for-studenter/stillingsannonser">
              Utforsk stillingsannonser
            </Link>
          </div>
        </div>
      </div>
    </div><div className="mx-auto flex w-11/12 mt-6 max-w-7xl  ">
        <div className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
          <div className="rounded-lg p-4 bg-white back">
            <h2>Hva er ITxBERGEN?</h2>
            <p>
              ITxBERGEN arrangerer karrieredager for IT-studenter i
              bergensområdet, og er tidligere kjent som echo karriere.
              Arrangementet ble holdt for første gang i 2019, noe som ble en
              stor suksess med stort oppmøte fra IT-studenter fra hele Bergen.
              Eneklte ganger holder vi også andre karrierefremmende
              arrangementer.
              <br />
              <br />
              Vi er en frivillig studentorganisasjon som samarbeider med andre
              linjeforeninger innenfor IT i Bergen, for å sakpe en felles
              årlig karrieredag. Vi når ut til linjeforeningene på
              Universitetet i Bergen, Høgskulen på Vestlandet og Høyskolen
              Kristiania. Samtidig skaper vi et arrangement som er åpent for
              alle IT-studenter i Bergen, og alle som er interesserte.
            </p>
            <br />
            <Link
              className="bg-gray-700 text-white rounded-full shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
              href="/for-studenter">
              Mer informajon til studenter
            </Link>
            <br />
            <br />
            <Link
              className="bg-gray-700 text-white rounded-full shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
              href="/for-bedrifter">
              Mer informajon til bedrifter
            </Link>
            <br />
            <br />
          </div>
        </div>
      </div><div className="mx-auto flex w-11/12 mt-6 max-w-7xl  ">
        <div className="w-full rounded-lg bg-gradient-to-r from-[#153c88] to-[#5b7cc2] text-white p-8 shadow-md">
          <h2>Salmon City 2023</h2>
          <p>
            I fjor vår var Kulturhuset på kokepunktet da Salmon City inntok
            Bergen for første gang. Den 6. og 7. mars 2023 ønsker de å
            invitere IT-studenter tilbake med andreutgaven av Norges største
            møteplass for studenter og sjømatnæringen.
            <br />
            <br />
            Dit kommer bl.a. Gustav Witzøe Sr., CEO i Lerøy, Henning
            Beltestad, General Manager i Skretting, Håvard Walde, partner i
            McKinsey Anders Milde Gjendemsjø, CEO i GSI Sophie Ryan,
            Sjømatguru Dag Sletmo og mange, mange flere.
          </p>
          <br />
          <a
            className="bg-white text-black hover:text-white rounded-full shadow-md px-4 py-2 mt-4 hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
            href="https://salmoncity.no/"
            target="_blank"
            rel="noreferrer"
            aria-label="Les mer om Salmon City, ekstern lenke.">
            Les mer om Salmon City <i className="ri-external-link-fill"></i>
          </a>

          <br />
          <br />
        </div>
      </div></>
  );
}
