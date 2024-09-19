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
          <h2 className="pl-6">Karrieredagen pågår nå</h2>
        </div>
        <p>
          Årets karrieredag pågår nå. Benytt{" "}
          <ExternalLink
            href="https://www.google.com/maps/@60.3882061,5.3275722,3a,34.2y,55.56h,88.91t/data=!3m7!1e1!3m5!1sRaaCX-jLrl5pplMWPkpatg!2e0!5s20230901T000000!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
            linkText="inngang Peer Gynt"
          />
        </p>
      </div>
    </>
  );
}
