import type { NextPage } from "next";

import { HeadSEO } from "../../components/common/functions/HeadSEO";

import Events from "../../components/arrangement/index";
import { GetStaticProps } from "next";
import { client } from "../../src/lib/sanity.client";
import { groq } from "next-sanity";

const EventQuery = groq`*[_type == "event"] {
  _id,
  title,
  slug,
  starttime,
  endtime,
  organizer,
  eventType, 
    location,
} | order(starttime asc)`;

const AllPres: NextPage<{ events: any[] }> = ({ events }) => {
  return (
    <div>
      <HeadSEO
        title="Konseptpresentasjoner | ITxBergen"
        description="Overblikk over konseptpresentasjoner fra ITxBergen"
        canonical="/arrangement/konseptpresentasjoner"
      />
      <main>
        <div className="max-w-7xl w-11/12 mx-auto pt-6 pl-4">
          <h1>Konseptpresentasjoner</h1>
          <p className="max-w-4xl">
            Under karrieredagene har du mulighet til å delta på flere spennende
            konseptpresentasjoner. En Konseptpresentasjon er en 20 minutters
            presentasjon av en bedriften eller et tema som er spesielt
            interessant, eller viktig innen IT-bransjen. Ta en titt på de ulike
            konseptpresentasjonene under, og meld deg på de du ønsker å delta
            på.
          </p>
        </div>
        <Events
          events={events.filter(
            (event) => event.eventType === "Konseptpresentasjon"
          )}
        />
        <br />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await client.fetch(EventQuery);

  return {
    props: {
      events,
    },
  };
};

export default AllPres;
