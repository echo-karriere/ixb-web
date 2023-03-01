import Link from "next/link";

export default function Infosection() {
  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <hr className="border-gray-300 mb-6" />
      <h1 className="text-3xl font-bold">Hva er ITxBERGEN?</h1>
      <p className="mt-4">
        ITxBERGEN arrangerer karrieredager for IT-studenter i bergensområdet som
        tidligere er kjent som echo karriere. Arrangementet ble holdt for første
        gang i 2019, noe som ble en stor suksess med stort oppmøte fra
        IT-studenter fra hele Bergen. Eneklte ganger holder vi også andre
        karrierefremmende arrangementer.
        <br />
        <br />
        Vi er en frivillig studentorganisasjon som samarbeider med andre
        linjeforeninger innenfor IT i Bergen, for å sakpe en felles årlig
        karrieredag. Vi når ut til linjeforeningene på Universitetet i Bergen,
        Høgskulen på Vestlandet og Høyskolen Kristiania. Samtidig skaper vi et
        arrangement som er åpent for alle IT-studenter i Bergen, og alle som er
        interesserte.
      </p>
      <br />
      <Link
        className="bg-[#cab169] hover:bg-gray-800 rounded p-2 font-semibold hover:text-white"
        href="/for-bedrifter">
        Mer informasjon til bedrifter
      </Link>
      <br />
      <br />
      <Link
        className="bg-[#cab169] hover:bg-gray-800 rounded p-2 font-semibold hover:text-white"
        href="/for-studenter">
        Mer informasjon til studenter
      </Link>
      <hr className="border-gray-300 mt-6" />
    </div>
  );
}
