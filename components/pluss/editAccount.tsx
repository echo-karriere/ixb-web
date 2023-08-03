import React, { useState, useEffect } from "react";

const EditAccount = () => {
  const [name, setPlusName] = useState("");
  const [pin, setPin] = useState("");
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmNewPin, setConfirmNewPin] = useState("");
  const correctPin = localStorage.getItem("userPIN") || "1234"; // Use the correct PIN stored in localStorage or default to "1234"

  // Load existing name from localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setPlusName(storedName);
    }
  }, []);

  const handleNameChange = (e: { currentTarget: { value: any } }) => {
    const newName = e.currentTarget.value;
    setPlusName(newName);
  };

  const handlePinChange = (e: { currentTarget: { value: any } }) => {
    const newPin = e.currentTarget.value;
    setPin(newPin);
  };

  const handleCurrentPinChange = (e: { currentTarget: { value: any } }) => {
    const currentPinValue = e.currentTarget.value;
    setCurrentPin(currentPinValue);
  };

  const handleNewPinChange = (e: { currentTarget: { value: any } }) => {
    const newPinValue = e.currentTarget.value;
    setNewPin(newPinValue);
  };

  const handleConfirmNewPinChange = (e: { currentTarget: { value: any } }) => {
    const confirmNewPinValue = e.currentTarget.value;
    setConfirmNewPin(confirmNewPinValue);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (pin === correctPin) {
      localStorage.setItem("userName", name);
      alert("Name updated successfully!");
    } else {
      alert("Incorrect PIN. Name not updated.");
    }
  };

  const handleSubmitPin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (currentPin === correctPin && newPin === confirmNewPin) {
      localStorage.setItem("userPIN", newPin);
      alert("PIN updated successfully!");
      setPin(newPin); // Update the current PIN displayed in the input field
      setCurrentPin(""); // Reset currentPin input field
      setNewPin(""); // Reset newPin input field
      setConfirmNewPin(""); // Reset confirmNewPin input field
    } else {
      alert("Invalid PIN or new PIN does not match the confirmation.");
    }
  };

  return (
    <>
      <h1>Rediger brukerkonto</h1>
      <p>
        Skulle du ha behov for å redigere enten navnet eller PIN koden din kan
        du gjøre dette her.
      </p>
      <h2>Endre navn</h2>
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

        <label htmlFor="pin">Bekreft PIN koden din</label>
        <input
          type="password"
          name="pin"
          id="pin"
          value={pin}
          inputMode="numeric"
          pattern="^[0-9]{4,8}$"
          onChange={handlePinChange}
          placeholder="PIN"
          required
          className="border-2 rounded px-3 py-2 my-2"
        />

        <button
          type="submit"
          className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 w-40 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
          {" "}
          Lagre endringer
        </button>
      </form>
<br />
      <h2>Endre PIN</h2>
      <form className="flex flex-col" onSubmit={handleSubmitPin}>
        <label htmlFor="currentPin">Nåværende PIN</label>
        <input
          type="password"
          name="currentPin"
          id="currentPin"
          value={currentPin}
          inputMode="numeric"
          pattern="^[0-9]{4,8}$"
          onChange={handleCurrentPinChange}
          placeholder="Nåværende PIN"
          required
          className="border-2 rounded px-3 py-2 my-2"
        />

        <label htmlFor="newPin">Ny PIN (4-8 siffer)</label>
        <input
          type="password"
          name="newPin"
          id="newPin"
          value={newPin}
          inputMode="numeric"
          pattern="^[0-9]{4,8}$"
          onChange={handleNewPinChange}
          placeholder="Ny PIN"
          required
          className="border-2 rounded px-3 py-2 my-2"
        />

        <label htmlFor="confirmNewPin">Bekreft ny PIN (4-8 siffer)</label>
        <input
          type="password"
          name="confirmNewPin"
          id="confirmNewPin"
          value={confirmNewPin}
          inputMode="numeric"
          pattern="^[0-9]{4,8}$"
          onChange={handleConfirmNewPinChange}
          placeholder="Bekreft ny PIN"
          required
          className="border-2 rounded px-3 py-2 my-2"
        />


        <button
          type="submit"
          className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 w-40 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
          Lagre endringer
        </button>
      </form>
    </>
  );
};

export default EditAccount;
