import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../../src/lib/sanity.client";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Stillingsannonser from "../../../components/for-studenter/stillingsannonser/stillingsannonser";

const query = groq`*[_type == "joblisting" && defined(slug.current)]{
  _id,
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

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  return { props: { data } };
};

export default function JobAds({ data }: { data: SanityDocument[] }) {
  return (
    <>
      <HeadSEO
        title="Stillingsannonser | ITxBERGEN"
        description="Stillingsannonser for studenter ved ITxBERGEN"
      />
      <Stillingsannonser joblisting={data} />
    </>
  );
}
