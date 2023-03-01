import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function Infosection() {
  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <hr className="border-gray-300 mb-6" />
      <h2 className="text-3xl font-bold">Hva er ITxBERGEN?</h2>
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
        className="bg-[#cab169] hover:bg-gray-800 rounded p-2 font-semibold hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-400"
        href="/for-bedrifter">
        Mer informasjon til bedrifter
      </Link>
      <br />
      <br />
      <Link
        className="bg-[#cab169] hover:bg-gray-800 rounded p-2 font-semibold hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-400"
        href="/for-studenter">
        Mer informasjon til studenter
      </Link>
      <hr className="border-gray-300 mt-6" />
      <h2 className="text-3xl font-bold mt-6">Salmon City 2023</h2>
      <p className="mt-4">
        I fjor vår var Kulturhuset på kokepunktet da Salmon City inntok Bergen
        for første gang. Den 6. og 7. mars 2023 ønsker de å invitere
        IT-studenter tilbake med andreutgaven av Norges største møteplass for
        studenter og sjømatnæringen.
        <br />
        <br />
        Dit kommer bl.a. Gustav Witzøe Sr., CEO i Lerøy, Henning Beltestad,
        General Manager i Skretting, Håvard Walde, partner i McKinsey Anders
        Milde Gjendemsjø, CEO i GSI Sophie Ryan, Sjømatguru Dag Sletmo og mange,
        mange flere.
      </p>
      <br />
      <a
        className="bg-[#cab169] hover:bg-gray-800 rounded p-2 font-semibold hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-400"
        href="https://salmoncity.no/"
        target="_blank"
        rel="noreferrer">
        Les mer om Salmon City{" "}
        <i aria-label=", Ekstern lenke." className="ri-external-link-fill"></i>
      </a>
    </div>
  );
}
