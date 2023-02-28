import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function Notification() {
  return (
    <div className="bg-gradient-to-r bg-yellow-200 flex justify-left max-w-7xl md:w-11/12 mx-auto md:shadow-md px-6 py-4 mb-4 mb:mt-6 ">
      <br />
      <p className="text-lg">
        <i className="ri-information-line text-2xl" />
        <br />
        echo karriere har byttet navn, og vil fra 1. mars være kjent som
        ITxBergen.{" "}
        <Link href="/nytt-navn" className="underline rounded-lg">
          {" "}
          Du kan lese mer om navnbytte her
        </Link>
        .
      </p>
    </div>
  );
}
