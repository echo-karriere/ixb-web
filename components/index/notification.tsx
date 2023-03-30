import Link from "next/link";
import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

export default function Notification() {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const isClosed =
      typeof localStorage !== "undefined" &&
      localStorage.getItem("notificationClosed") === "true";
    setClosed(isClosed);
  }, []);

  const handleClose = () => {
    setClosed(true);
    typeof localStorage !== "undefined" &&
      localStorage.setItem("notificationClosed", "true");
  };

  if (closed) {
    return null;
  }

  return (
    <div className="bg-yellow-200 flex justify-left w-full mx-auto px-6 py-4 relative">
      <div className="max-w-7xl w-11/12 mx-auto">
        <div className="ml-3">
          <p className="text-lg">
            echo karriere har byttet navn, og vil fra 1. mars være kjent som
            ITxBergen.{" "}
            <Link href="/nytt-navn" className="underline rounded-lg">
              {" "}
              Du kan lese mer om navnbytte her
            </Link>
            .
          </p>

          <button
            onClick={handleClose}
            className=" bg-gray-700 hover:bg-gray-900 mt-2 p-1.5 rounded text-white "
            aria-label="Close">
            Skjul denne meldingen
          </button>
        </div>
      </div>
    </div>
  );
}
