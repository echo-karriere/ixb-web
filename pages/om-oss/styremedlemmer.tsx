import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../src/lib/sanity.client";
import Styremedlemmer from "../../components/om-oss/styremedlemmer/styremedlemmer";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const query = groq`*[_type == "committeeMember" && defined(slug.current)]{
  _id,
  name,
  role,
  email,
  linkedin,
  profilePicture,
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
};

export default function Styremedlem({ data }: { data: SanityDocument[] }) {
  return (
    <>
      <HeadSEO
        title="Styremedlemmer | ITxBERGEN"
        description="Se hvem som sitter i styret for ITxBERGEN, hvem som er ansvarlig for hva og kontaktinformasjon."
      />
      <Styremedlemmer committeeMember={data} />
    </>
  );
}
