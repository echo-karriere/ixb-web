import Link from "next/link";

export default function PameldingInfo() {
  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="max-w-3xl">
        <h1>Påmelding til ITxBERGEN sine karrieredager 2023</h1>
        {/* <div
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
        </div> */}
        <p>
          Ønsker du og din bedrift å delta på våre karrieredager for
          IT-studenter i september? Påmeldingen er nå åpen! Du kan lese mer om
          arrangementet i invitasjonen nedenfor. Påmeldingen er åpen til 30.
          april.
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
        <br />
        <br />
        <h2>Usikker på om bedriften er påmeldt?</h2>
        Om du ønsker å sjekke om bedriften din er påmeldt, kan du skrive inn
        orginisasjonsnummeret nedenfor. Hvis bedriften er påmeldt, vil du få opp
        en liste over hvilke dager bedriften er påmeldt på, samt hvilke
        ekstratjenester bedriften har valgt.
      </div>
      <br />
      <form>
        <label className="font-bold" htmlFor="ref">
          Organisasjonsnummer
        </label>
        <br />
        <input
          className="border-gray-500 border p-2 border-solid"
          type="text"
          name="ref"
          id="ref"
          required
          pattern="[0-9]{9}"
          onInput={(e) => {
            const input = e.target as HTMLInputElement; // add type annotation
            input.value = input.value.replace(/[^0-9]/g, ""); // replace all non-numeric characters with empty string
            if (input.value.length > 9) {
              input.value = input.value.slice(0, 9);
            }
          }}
        />

        <br />
        {/* Add error message element */}
        <div
          id="error-message"
          style={{ color: "red", marginTop: "0.5rem" }}></div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 rounded"
          type="submit"
          onClick={(e) => {
            e.preventDefault(); // prevent default form submission
            const inputField = document.getElementById(
              "ref"
            ) as HTMLInputElement | null; // add type annotation and null check
            const ref = inputField?.value; // add null check
            const pattern = new RegExp(inputField?.pattern ?? ""); // add null check and create RegExp from pattern string
            const errorMessage = document.getElementById(
              "error-message"
            ) as HTMLDivElement; // add type annotation and null check for error message element
            if (!ref || !pattern.test(ref)) {
              // check if ref is falsy or does not match pattern
              errorMessage.innerText = "Ugyldig organisasjonsnummer."; // set error message text
              return; // exit the function without redirecting
            }
            window.location.href = `https://skjema.ixb.no/status?ref=${ref}`; // append value to URL and redirect
          }}>
          Sjekk status
        </button>
      </form>
    </div>
  );
}
