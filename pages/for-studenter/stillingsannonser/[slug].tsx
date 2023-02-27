import type { SanityDocument } from "@sanity/client";
import { client } from "../../../src/lib/sanity.client";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import { groq } from "next-sanity";
import { GetStaticPaths } from "next";

interface JobAdProps {
  data: SanityDocument;
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  // fetch the data for the job listing with the matching slug
  const data = await client.fetch(
    groq`*[_type == "joblisting" && slug.current == $slug][0]{
      _id,
      title,
      slug,
     
    }`,
    { slug }
  );

  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data =
    await client.fetch(groq`*[_type == "joblisting" && defined(slug.current)]{
    slug
  }`);

  const paths = data.map((job: { slug: { current: string } }) => ({
    params: { slug: job.slug.current },
  }));

  return { paths, fallback: false };
};

export default function JobAd({ data }: JobAdProps) {
  const { title } = data;

  return (
    <>
      <HeadSEO
        title={`${title} | ITxBERGEN`}
        description={"Utforsk flere stillingsannonser på ixb.no"}
      />
      <h1>{title}</h1>
    </>
  );
}
