import type { NextPage } from "next";

import { HeadSEO } from "../../components/common/functions/HeadSEO";

import News from "../../components/nyheter/index";
import { GetStaticProps } from "next";
import { client } from "../../src/lib/sanity.client";
import { groq } from "next-sanity";

const eventQuery = groq`*[_type == "event" && defined(slug.current)] {
  _id,
  title,
  slug,
  deadline,
  eventType,
  location
}`;

const newsQuery = groq`*[_type == "news"] {
  _id,
  title,
  slug,
  _createdAt,
  newsimage,
} | order(_createdAt desc)`;

const AllNews: NextPage<{ events: any[]; news: any[] }> = ({ events, news }) => {
  return (
    <div>
      <HeadSEO
        title="Nyheter | ITxBergen"
        description="Overblikk over nyheter fra ITxBergen"
        canonical="/nyheter"
      />
      <main>
        <News news={news} />

        <br />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await client.fetch(eventQuery);
  events.sort(
    (a: any, b: any) =>
      new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );

  const news = await client.fetch(newsQuery);

  return {
    props: {
      events,
      news,
    },
  };
};

export default AllNews;
