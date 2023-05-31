import Link from "next/link";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

export default function whistleblower() {
  return (
    <>
      <HeadSEO
        title="ITxBergen Debugger | ITxBERGEN"
        description="ITxBergen Debugger lar deg melde i fra kritikkverdig atferd på ITxBERGEN sine arrangementer."
        canonical="/whistleblower"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>ITxBergen Debugger</h1>
            <p>
              ITxBergen Debugger kan ikke hjelpe deg med å fikse feil i koden
              din, men er en tjeneste som lar deg melde i fra uønskede hendelser
              på ITxBERGEN sine arrangementer. Bla ned på siden for å sende inn
              et varsel, eller for å logge inn.
            </p>
            <h2>Anonym varslingstjenste</h2>
            <p>
              Når du benytter deg av denne tjenesten er du anonym så lenge du
              ikke oppgir personlig informasjon når du sender inn varselet. Det
              er valgfritt om du øsnker å oppgi personlig informasjon. Uansett
              hva du måtte velge, vil vi kunne holde deg oppdatert på saken.
            </p>
            <h2>Hvem mottar varslet.</h2>
            <p>
              Alle styremedemmer i ITxBERGEN vil kunne se varselet. Dette er for
              å sikre at varselet blir behandlet så raskt som mulig. En person i
              styret vil påta seg ansvaret til å behandle varselet. Denne
              personen vil være den eneste som har tilgang til samtaleloggen
              videre i saken.
            </p>
            <h2>Svar på varsel.</h2>
            <p>
              Før du sender inn et varsel vil du få en referansekode. Denne kan
              du bruke for å lese svar på varselet.{" "}
              <b>Det er viktig at du ikke mister referansekoden</b> om du ønsker
              å kommunisere videre om saken. Ønsker du å svare på en melding
              trykker du på "Reply" knappen over meldingen. Logg deg også inn
              for å sjekke bekreftelse på at varselet er mottatt med en gang du
              har sendt det inn. Om bekreftelsen ikke er mottatt kan det være
              midlertidige problemer med tjenesten, og vi vil oppfordre deg til
              å sende inn varselet på nytt på et senere tidspunkt.
            </p>
            <h2>Flere varslingskanaler</h2>
            <p>
              Vi er ikke den eneste du kan varsle til. Om du føler deg mer
              komfortabel med å varsle til en annen instans kan du gjøre det.
              Sjekk ut{" "}
              <Link
                href="/sifra"
                className="text-blue-500 hover:text-blue-700 underline">
                itxbergen.no/sifra
              </Link>{" "}
              for mer informasjon.
            </p>
            <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md mt-4">
              <div className="flex">
                <div>
                  <h3>Akutte hendelser</h3>
                  <p>
                    Ved akutte hendelser som krever umiddelbar oppmerksomhet
                    SKAL riktig nødetat varsles først. Nødetatene kan nås på
                    følgende nummer:
                  </p>
                  <br />
                  <ul>
                    <li>Brann: 110</li>
                    <li>Politi: 112</li>
                    <li>Medisinsk nødtelefon: 113</li>
                    <li>Legevakt: 116 117</li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <a
              href="https://skjema.ixb.no/ixb-whistleblower"
              className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
              Send inn varsel
            </a>{" "}
            <br />
            <br />
            <Link
              href="/whistleblower/logg-inn"
              className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
              Logg inn for å lese svar på varsel
            </Link>
          </div>
          <br />
          <small className="text-gray-500">
            Navnet IxB Whistleblower og IxB Debugger brukes for øyeblikket om
            hverandre. Dette vil bli endret i fremtiden.
          </small>
        </div>
      </main>
    </>
  );
}
