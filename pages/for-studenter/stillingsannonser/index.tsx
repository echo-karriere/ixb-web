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
  link
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const filteredData = data.filter((job: { deadline: string }) => {
    const jobDeadline = new Date(job.deadline);

    return !job.deadline || jobDeadline >= now;
  });

  // sort after deadline so that the closest deadline is first,
  // and jobs without a deadline are always at the bottom
  filteredData.sort((a: { deadline: string }, b: { deadline: string }) => {
    if (!a.deadline) {
      return 1;
    }
    if (!b.deadline) {
      return -1;
    }
    return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
  });

  return { props: { data: filteredData } };
};

export default function JobAds({ data }: { data: SanityDocument[] }) {
  return (
    <>
      <HeadSEO
        title="Stillingsannonser | ITxBERGEN"
        description="Finn stillingsannonser som passer for studenter under utdanning og nyutdannede"
        canonical="/for-studenter/stillingsannonser"
      />
      <Stillingsannonser joblistings={data} />
    </>
  );
}
