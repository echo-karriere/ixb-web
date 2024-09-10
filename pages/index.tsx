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
import Notification from "../components/index/notification";

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
        <Notification />
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
