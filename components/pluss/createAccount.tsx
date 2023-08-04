import { useState } from "react";
import secureLocalStorage from "react-secure-storage";

const CreateAccount = () => {
  const [name, setPlusName] = useState("");
  const [pin, setPlusPin] = useState("");
  const [, setIsPlus] = useState(false);
  const [pinConfirm, setPinConfirm] = useState("");

  const handleNameChange = (e: {
    currentTarget: { value: React.SetStateAction<string> };
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

    // if localsotrage is set, then set isPlus to true
    if (secureLocalStorage.getItem("userName") && secureLocalStorage.getItem("userPIN")) {
      setIsPlus(true);
    }

    // Refresh the page after successful form submission
    window.location.reload();
  };

  return (
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
  );
};

export default CreateAccount;
