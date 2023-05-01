export default function PameldingInfo() {
  return (
    <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
      <div className="max-w-3xl">
        <h1>Påmelding til ITxBERGEN sine karrieredager 2023</h1>
        <p>
          Fristen for å delta på karrieredagene 2023 har gått ut. Dersom du
          ønsker å melde bedriften på ventelisten, kan du sende en e-post til{" "}
          <a
            className="underline text-blue-500"
            href="mailto:kontakt@itxbergen.no">
            kontakt@itxbergen.no
            <i className="ri-external-link-line" aria-label=", ekstern lenke."></i>
          </a>
        </p>
        <br />
        <a
          className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
          href="https://old.echokarriere.no/files/invitation.pdf">
          Last ned invitasjonen
        </a>
        <br />
        <br />
        <h2>Usikker på om bedriften er påmeldt?</h2>
        Om du ønsker å sjekke om bedriften din er påmeldt, kan du skrive inn
        orginisasjonsnummeret nedenfor.
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
          inputMode="numeric"
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
          className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
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
