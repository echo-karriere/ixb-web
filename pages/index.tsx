import type { NextPage } from "next";
import Hero from "../components/index/hero";
import LogoCloud from "../components/index/logocloud";
import { HeadSEO } from "../components/common/functions/HeadSEO";
import Infosection from "../components/index/infosection";
import Events from "../components/index/events";
import { GetStaticProps } from "next";
import { client } from "../src/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`*[_type == "event" && defined(slug.current)]{
  _id,
  title,
  slug,
  deadline,
  eventType,
  location,
  }`;

const Home: NextPage<{ events: any[] }> = ({ events }) => {
  return (
    <div>
      <HeadSEO
        title="ITxBergen - Vi samler IT-studentene i Bergen"
        description="ITxBERGEN (tidligere kjent som echo karriere) er en studentgruppe som arrangerer karrieredager hvor IT-studenter kan bli kjent med fremtidige arbeidsgivere, samt få et innblikk i hvordan arbeidsmarkedet ser ut for IT-studenter i Bergen og Norge."
        canonical="/"
      />
      <main>
        <Hero />
        <Events events={events} />
        <Infosection />
        <LogoCloud />
        <br />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await client.fetch(query);
  events.sort(
    (
      a: { deadline: string | number | Date },
      b: { deadline: string | number | Date }
    ) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );
  return {
    props: {
      events,
    },
  };
};

export default Home;
