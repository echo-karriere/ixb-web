import { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { client } from "../../../src/lib/sanity.client";
import Stillingsannonse from "../../../components/for-studenter/stillingsannonser/stillingsannonse";

const query = groq`*[_type == "joblisting" && slug.current == $slug][0]{
 publish,
  title,
  slug,
  company,
  logo,
  type,
  location,
  description,
  deadline,
  link,
}`;

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "joblisting" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? `` };

  const joblisting = await client.fetch(query, queryParams);

  return {
    props: {
      data: { joblisting },
    },
  };
};

export default function JobAd({
  data,
}: {
  data: { joblisting: SanityDocument };
}) {
  return <Stillingsannonse joblisting={data.joblisting} />;
}
