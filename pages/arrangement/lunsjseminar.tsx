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

const AllWorkshops: NextPage<{ events: any[] }> = ({ events }) => {
  return (
    <div>
      <HeadSEO
        title="Lunsjseminar | ITxBergen"
        description="Overblikk over lunsjseminar fra ITxBergen"
        canonical="/arrangement/lunsjseminar"
      />
      <main>
        <div className="max-w-7xl w-11/12 mx-auto pt-6 pl-4">
          <h1>Lunsjseminar</h1>
          <p className="max-w-4xl">
            Under karrieredagene har du mulighet til å delta på flere
            lunsjseminar. Her har du mulighet til å bli bedre kjent med
            bedriftene og få både fagelig og mettende påfyll. Ta en titt på de
            ulike lunsjseminarene under, og meld deg på de du ønsker å delta på.
          </p>
        </div>
        <Events
          events={events.filter((event) =>
            event.title.includes("Lunsjseminar:")
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

export default AllWorkshops;
