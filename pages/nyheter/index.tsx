import type { NextPage } from "next";

import { HeadSEO } from "../../components/common/functions/HeadSEO";

import News from "../../components/nyheter/index";
import { GetStaticProps } from "next";
import { client } from "../../src/lib/sanity.client";
import { groq } from "next-sanity";


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


  const news = await client.fetch(newsQuery);

  return {
    props: {
      news,
    },
  };
};

export default AllNews;
