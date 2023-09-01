import type { NextPage } from "next";
import Hero from "../components/index/hero";
import LogoCloud from "../components/index/logocloud";
import { HeadSEO } from "../components/common/functions/HeadSEO";
import Infosection from "../components/index/infosection";
import Events from "../components/index/events";
import News from "../components/index/news";
import { GetStaticProps } from "next";
import { client } from "../src/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import Link from "next/link";
import secureLocalStorage from "react-secure-storage";

const eventQuery = groq`*[_type == "event" && defined(slug.current)] {
  _id,
  title,
  slug,
  starttime,
  endtime,
  eventType,
  location
} | order(starttime asc)`;

const newsQuery = groq`*[_type == "news"] {
  _id,
  title,
  slug,
  _createdAt,
  newsimage,
} | order(_createdAt desc)`;

const Home: NextPage<{ events: any[]; news: any[] }> = ({ events, news }) => {
  const [userName, setUserName] = useState("");
  const [isPlus, setIsPlus] = useState(false);

  useEffect(() => {
    const userNameFromLocalStorage =
      secureLocalStorage.getItem("userName")?.toString() ?? "";
    setUserName(userNameFromLocalStorage);
    if (
      secureLocalStorage.getItem("userName") &&
      secureLocalStorage.getItem("userPIN")
    ) {
      setIsPlus(true);
    }
  }, []);

  return (
    <div>
      <HeadSEO
        title="ITxBergen - Vi samler IT-studentene i Bergen"
        description="ITxBERGEN (tidligere kjent som echo karriere) er en studentgruppe som arrangerer karrieredager hvor IT-studenter kan bli kjent med fremtidige arbeidsgivere, samt få et innblikk i hvordan arbeidsmarkedet ser ut for IT-studenter i Bergen og Norge."
        canonical="/"
      />
      <main>
        <Hero />
        <div className="max-w-7xl w-11/12 mx-auto pl-4 pt-6">
          <div className="flex items-center">
            <span className="absolute flex h-3 w-3 mr-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33030d] opacity-75"></span>
              <span className="absolute inline-flex rounded-full h-3 w-3 bg-[#33030d]"></span>
            </span>
            <h2 className="pl-6">Vi søker frivillige!</h2>
          </div>
          <p>
            Ønsker du å hjelpe oss med å arrangere karrieredagene? Vi ser etter
            frivillige som vil hjelpe til på karrieredagene. Som takk vil du få
            en billett til banketten etter karrieredagene. Er du interessert i å
            hjelpe til? Send oss en mail til{" "}
            <a
              className="underline text-blue-700"
              href="mailto:kontakt@itxbergen.no">
              kontakt@itxbergen.no
            </a>{" "}
            og skriv maks 3-4 setninger om din motivasjon, eller hvorfor vi skal
            velge deg.
          </p>
          {/* <div className="mt-4 flex flex-wrap gap-2">
            <Link
              className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
              href="/for-studenter/karrieredagene/timeplan">
              Timeplan
            </Link>
            <Link
              className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
              href="/for-studenter/karrieredagene/standkart">
              Standkart
            </Link>
            <Link
              className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
              href="/arrangement/lunsjseminar-knowit--sparebanken-vest">
              Lunsjseminar
            </Link>
            <Link
              className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
              href="/arrangement/workshops">
              Workshops
            </Link>
            <Link
              className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
              href="/arrangement/konseptpresentasjoner">
              Konseptpresentasjoner
            </Link>
            <Link
              className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
              href="/for-studenter/stillingsannonser">
              Stillingsannonser
            </Link>
          </div> */}
        </div>
        {/*PLUSS+ STARTS*/}
        {isPlus ? (
          <>
            <div className="max-w-7xl w-11/12 mx-auto pl-4 pt-6">
              <h2>
                Velkommen tilbake, {userName}{" "}
                <span className="bg-yellow-300 text-yellow-700 font-bold text-xs rounded-full px-2">
                  PLUSS+
                </span>
              </h2>
              <p>
                Vi har lagt til noen snarveier på forsiden for deg som har en
                PLUSS+ konto.
              </p>

              <a href="https://airtable.com/appa8dZYt9s6GSS8K/shrEXkOYcPiAG7cDP">
                <button className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 mr-2 ease-in-out focus:outline-none focus:ring-4   focus:ring-yellow-500">
                  {" "}
                  Publiser en ny stillingsannonse
                </button>
              </a>
              <Link href="/for-bedrifter/stillingsannonser/edit">
                <button className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 mr-2  focus:ring-yellow-500">
                  Rediger stillingsannonser
                </button>
              </Link>
              <Link href="/om-oss/kontakt-oss">
                <button className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 mr-2  focus:ring-yellow-500">
                  Kontakt oss
                </button>
              </Link>
              <Link href="/pluss">
                <button className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 mr-2  focus:ring-yellow-500">
                  Min profil
                </button>
              </Link>
            </div>
          </>
        ) : null}
        {/*PLUSS+ ENDS*/}
        <Events events={events} />
        <News news={news} />
        <Infosection />
        <LogoCloud />
        <br />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await client.fetch(eventQuery);

  const news = await client.fetch(newsQuery);

  return {
    props: {
      events,
      news,
    },
  };
};

export default Home;
