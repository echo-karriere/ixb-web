import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

const CreateAccount = () => {
  const [name, setPlusName] = useState("");
  const [pin, setPlusPin] = useState("");
  const [pinConfirm, setPinConfirm] = useState("");
  const [isPlus, setIsPlus] = useState(false); // Initialize with 'false'

  useEffect(() => {
    const isPlusValue = localStorage.getItem("isPlus");
    setIsPlus(isPlusValue === "true");
  }, []);

  const handleNameChange = (e: {
    currentTarget: { value: SetStateAction<string> };
  }) => {
    setPlusName(e.currentTarget.value);
  };

  const handlePinChange = (e: { currentTarget: { value: string } }) => {
    // Remove any non-digit characters and limit to 8 digits
    const cleanedPin = e.currentTarget.value.replace(/\D/g, "").slice(0, 8);
    setPlusPin(cleanedPin);
  };

  const handlePinConfirmChange = (e: { currentTarget: { value: string } }) => {
    // Remove any non-digit characters and limit to 8 digits
    const cleanedPinConfirm = e.currentTarget.value
      .replace(/\D/g, "")
      .slice(0, 8);
    setPinConfirm(cleanedPinConfirm);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (pin !== pinConfirm) {
      alert("PIN kode er ikke identisk med bekreft PIN kode.");
      return;
    }

    secureLocalStorage.setItem("userName", name);
    secureLocalStorage.setItem("userPIN", pin);
    setIsPlus(true); // Set isPlus to 'true' when the form is submitted successfully

    localStorage.setItem("isPlus", "true"); // Set isPlus to 'true' in localStorage

    // Refresh the page after successful form submission
    window.location.reload();
  };
  return (
    <>
      {!isPlus ? (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name">Navn</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Navn"
            required
            className="border-2 rounded px-3 py-2 my-2"
          />
          <label htmlFor="pin">PIN kode (4-8 siffer)</label>
          <input
            type="password"
            inputMode="numeric"
            name="pin"
            id="pin"
            pattern="^[0-9]{4,8}$"
            value={pin}
            onChange={handlePinChange}
            placeholder="PIN kode"
            required
            className="border-2 rounded px-3 my-2 py-2"
          />
          <label htmlFor="pinconfirm">Bekreft PIN kode (4-8 siffer)</label>
          <input
            type="password"
            inputMode="numeric"
            name="pinconfirm"
            id="pinconfirm"
            pattern="^[0-9]{4,8}$"
            value={pinConfirm}
            onChange={handlePinConfirmChange}
            placeholder="Bekreft PIN kode"
            required
            className="border-2 rounded px-3 my-2 py-2"
          />

          <button
            type="submit"
            className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 w-40 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
            Opprett bruker
          </button>
        </form>
      ) : (
        // make a info box that says "you are already a plus member with blue text, background and border"
        <div className="bg-blue-100 text-blue-800 rounded border-blue-500 px-4 py-2 mt-4">
          <h3>Vi har deaktivert registreringsskjemaet i denne nettleseren!</h3>
          <p>
            Det er fordi det allerede er en PLUSS+ bruker registrert i denne
            nettleseren, men at nettleseren din forhindrer siden i å hente ut
            informasjonen som er lagret i kontoen din. Trykk på knappen under
            for å lese hvorfor dette skjer og hvordan du kan løse problemet, og
            få tilbake informasjonen du har lagret i kontoen din.{" "}
          </p>
          <small>Feilmelding: PL-400</small>
          <br />
          <br />
          <Link
            className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500"
            href="/pluss/pl-400">
            Løsninger på problemet
          </Link>
          <br />
          <br />
        </div>
      )}
    </>
  );
};

export default CreateAccount;
