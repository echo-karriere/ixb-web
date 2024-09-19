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
        title="Timeplan | ITxBergen"
        description="Overblikk over timeplanen til årets karrieredag"
        canonical="/arrangement"
      />
      <main>
        <div className="max-w-7xl w-11/12 mx-auto pt-6 pl-4">
          <h1>Arrangementer</h1>
        </div>
        <Events events={events} />
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
