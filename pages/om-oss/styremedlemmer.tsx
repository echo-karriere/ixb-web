import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../src/lib/sanity.client";
import Styremedlemmer from "../../components/om-oss/styremedlemmer/styremedlemmer";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const query = groq`*[_type == "committeeMember"]{
  _id,
  name,
  role,
  email,
  linkedin,
  profilePicture,
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(query);
  data.sort(
    (a: { role: string; name: number }, b: { role: string; name: number }) => {
      if (a.role === "Leder") {
        return -1;
      } else if (b.role === "Leder") {
        return 1;
      } else if (a.role === "Nestleder") {
        return -1;
      } else if (b.role === "Nestleder") {
        return 1;
      } else if (a.role === "Økonomiansvarlig") {
        return -1;
      } else if (b.role === "Økonomiansvarlig") {
        return 1;
      } else if (a.role === "Webansvarlig") {
        return -1;
      } else if (b.role === "Webansvarlig") {
        return 1;
      } else if (a.role === "Bedriftsansvarlig") {
        return -1;
      } else if (b.role === "Bedriftsansvarlig") {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    }
  );
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
