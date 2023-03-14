import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function Infosection() {
  return (
    <>
      <div className="mx-auto flex w-11/12 mt-6 max-w-7xl  ">
        <div className="w-full rounded bg-[#f2f2f2] p-6">
          <h2>Hva er ITxBERGEN?</h2>
          <p>
            ITxBERGEN arrangerer karrieredager for IT-studenter i
            bergensområdet, og er tidligere kjent som echo karriere.
            Arrangementet ble holdt for første gang i 2019, noe som ble en stor
            suksess med stort oppmøte fra IT-studenter fra hele Bergen. Eneklte
            ganger holder vi også andre karrierefremmende arrangementer.
            <br />
            <br />
            Vi er en frivillig studentorganisasjon som samarbeider med andre
            linjeforeninger innenfor IT i Bergen, for å skape en felles årlig
            karrieredag. Vi når ut til linjeforeningene på Universitetet i
            Bergen, Høgskulen på Vestlandet og Høyskolen Kristiania. Samtidig
            skaper vi et arrangement som er åpent for alle IT-studenter i
            Bergen, og alle som er interesserte.
          </p>
          <br />
          <Link
            className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
            href="/for-studenter">
            Mer informajon til studenter
          </Link>
          <br />
          <br />
          <Link
            className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
            href="/for-bedrifter">
            Mer informajon til bedrifter
          </Link>
          <br />
          <br />
        </div>
      </div>

      {/* <div className="max-w-7xl w-11/12 mt-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded p-4 md:p-6 shadow bg-gradient-to-r from-[#f2f2f2] to-[#f0f8fe]">
            <h2>Snittkalkulator</h2>
            <p className="-mt-2">
              Usikker på hva snittet ditt er? Bruk vår snittkalkulator for å
              regne ut snittet ditt.
            </p>
            <br />
            <Link
              className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
              href="/for-studenter/snittkalkulator">
              Regn ut snittet ditt
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <div className="rounded shadow p-4 md:p-6 bg-gradient-to-r from-[#f2f2f2] to-[#f0f0f0]">
              <h2>Stillingsannonser</h2>
              <p className="-mt-2">
                Vi publiserer stillingsannonser fra bedrifter som er på utkikk
                etter IT-studenter og nyutdannede.
              </p>
              <br />
              <Link
                className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
                href="/for-studenter/stillingsannonser">
                Utforsk stillingsannonser
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      
    </>
  );
}
