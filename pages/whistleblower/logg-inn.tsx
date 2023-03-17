import { HeadSEO } from "../../components/common/functions/HeadSEO";

export default function whistleblower() {
  return (
    <>
      <HeadSEO
        title="Logg inn - IxB Whistleblower | ITxBERGEN"
        description="IxB Whistleblower - Logg inn for å lese svar på varsel."
        canonical="/whistleblower/logg-inn"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>Logg inn - IxB Whistleblower</h1>
            <p>
              Skriv inn referansekoden du fikk når du sendte inn ditt varsel.
              Alle svar fra oss blir lagret i 8 dager før de slettes.
            </p>
            <br />
            <p>
              <b>Svare på vår henvendelse:</b>
            </p>

            <p>
              Du kan svare på vår henvendelse ved å sende en melding til denne
              adressen etter at du har logget inn:
              <br />
              <i>alt.ca-3i7b2fa@yopmail.com</i>
            </p>
            <br />
            <form>
              <label className="font-bold" htmlFor="ref">
                Referansekode
              </label>
              <br />
              <input
                className="border-gray-500 border p-2 border-solid"
                type="text"
                name="ref"
                id="ref"
                required
                pattern="[a-z]{10}-[0-9]{2}"
                onInput={(e) => {
                  // only allow lowercase letters and numbers
                  const input = e.target as HTMLInputElement; // add type annotation
                  input.value = input.value.replace(/[^a-z0-9-]/gi, ""); // replace all non-alphanumeric characters with empty string
                  // convert to lowercase
                  input.value = input.value.toLowerCase();
                  // dont allow more than 13 characters (10 letters, 2 numbers and 1 dash)
                  if (input.value.length > 13) {
                    input.value = input.value.slice(0, 13);
                  }
                }}
              />

              <br />
              {/* Add error message element */}
              <div
                id="error-message"
                style={{ color: "red", marginTop: "0.5rem" }}></div>
              {/* on submit, go to https://yopmail.com/?login=[ref here] */}
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
                    errorMessage.innerText =
                      "Refferansekoden du skrev inn er feil. Dobbeltsjekk og prøv på nytt."; // set error message text
                    return; // exit the function without redirecting
                  }
                  window.location.href = `https://yopmail.com/?login=${ref}`; // append value to URL and redirect
                }}>
                Logg inn
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
