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
    <>
      <div className="max-w-7xl w-11/12 mx-auto pl-4">
        <div className="flex items-center">
          <span className="absolute flex h-3 w-3 mr-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33030d] opacity-75"></span>
            <span className="absolute inline-flex rounded-full h-3 w-3 bg-[#33030d]"></span>
          </span>
          <h2 className="pl-6">Sjekk ut timeplanen</h2>
        </div>
        <p>
          Fra klokken 12:00 har du muligheten til å melde deg på en rekke ulike
          workshops og konseptpresentasjoner. Ta en titt på timeplanen under, og
          meld deg på det du ønsker å delta på.
        </p>
      </div>
    </>
  );
}
