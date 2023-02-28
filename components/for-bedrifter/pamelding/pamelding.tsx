import Link from "next/link";

export default function pamelding() {
  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="max-w-3xl">
        <h1>Påmelding til ITxBERGEN sine karrieredager 2023</h1>

        <div
          className="bg-yellow-100  rounded-b px-4 py-3 shadow-md"
          role="alert">
          <p>
            <strong className="font-bold">OBS!</strong>
            <br />
            <span className="block sm:inline">
              echo karriere endret navn til ITxBERGEN 1. mars. Les mer om
              navneendringen på{" "}
              <Link className="underline" href="/nytt-navn">
                ixb.no/nytt-navn
              </Link>
              .
            </span>
          </p>
        </div>
        <br />

        <p>
          Ønsker du og din bedrift å delta på våre karrieredager for
          IT-studenter i september? Påmeldingen er nå åpen! Du kan lese mer om
          arrangementet i invitasjonen nedenfor. Påmeldingen er åpen til 31.
          mars.
        </p>
        <br />
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="https://old.echokarriere.no/files/invitation.pdf">
          Last ned invitasjonen
        </a>
        <br />
        <br />
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="https://skjema.ixb.no/karrieredagene2023">
          Gå til påmeldingsskjema
        </a>
      </div>
    </div>
  );
}
