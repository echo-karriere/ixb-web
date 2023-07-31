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
  eventType, 
    location,
} | order(starttime asc)`;

const AllEvents: NextPage<{ events: any[] }> = ({ events }) => {
  return (
    <div>
      <HeadSEO
        title="Arrangementer | ITxBergen"
        description="Overblikk over arrangemnter  fra ITxBergen"
        canonical="/arrangement"
      />
      <main>
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
