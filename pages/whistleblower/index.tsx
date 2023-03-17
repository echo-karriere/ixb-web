import Link from "next/link";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

export default function whistleblower() {
  return (
    <>
      <HeadSEO
        title="IxB Whistleblower | ITxBERGEN"
        description="IxB Whistleblower lar deg melde i fra kritikkverdig atferd på ITxBERGEN sine arrangementer."
        canonical="/whistleblower"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>IxB Whistleblower</h1>
            <p>
              IxB Whistleblower lar deg melde i fra kritikkverdig atferd på
              ITxBERGEN sine arrangementer.
            </p>
            <br />
            <a
              href="https://skjema.ixb.no/ixb-whistleblower"
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 rounded">
              Send inn varsel
            </a>
            <br />
            <br />
            <Link
              href="/whistleblower/logg-inn"
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 rounded">
              Logg inn for å lese svar på varsel
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
