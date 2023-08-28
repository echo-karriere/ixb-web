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

const AllEvents: NextPage<{ events: any[] }> = ({ events }) => {
  return (
    <div>
      <HeadSEO
        title="Arrangementer | ITxBergen"
        description="Overblikk over arrangemnter  fra ITxBergen"
        canonical="/arrangement/workshops"
      />
      <main>
        <div className="max-w-7xl w-11/12 mx-auto pt-6 pl-4">
          <h1>Workshops</h1>
          <p className="max-w-4xl">
            Under karrieredagene har du mulighet til å delta på flere spennende
            workshops. Her vil du få muligheten til å lære mer om ulike temaer
            innenfor IT som avholdes av ulike bedrifter. Workshopsene varer i 60
            minutter, og det krever at du melder deg på for å delta. Ta en titt
            på de ulike workshopsene under, og meld deg på de du ønsker å delta
            på.
          </p>
        </div>
        <Events
          events={events.filter((event) => event.eventType === "Workshop")}
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

export default AllEvents;
