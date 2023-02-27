import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../../src/lib/sanity.client";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Stillingsannonser from "../../../components/for-bedrifter/stillingsannonser/stillingsannonser";

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
  // dont show if publish is false
  const filteredData = data.filter(
    (job: { publish: boolean }) => job.publish === true
  );
  // sort by deadline
  filteredData.sort(
    (a: { deadline: string }, b: { deadline: string }) =>
      new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );
  
  return { props: { data } };
};

export default function Home({ data }: { data: SanityDocument[] }) {
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
