import Link from "next/link";
import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import { ExternalLink } from "../common/functions/externalLink";

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
          <h2 className="pl-6">Takk for i år</h2>
        </div>
        <p>
          Takk for i år alle sammen. For de med bankettbillett, vi sees i kveld.
        </p>
      </div>
    </>
  );
}
