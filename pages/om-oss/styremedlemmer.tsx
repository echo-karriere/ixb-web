import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../src/lib/sanity.client";
import Styremedlemmer from "../../components/om-oss/styremedlemmer/styremedlemmer";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const query = groq`*[_type == "committeeMember" ]{
  _id,
  name,
  role,
  email,
  linkedin,
  profilePicture,
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  // Used to give each committee member a slug if they don't have one, crutial for the page to be deployed on vercel.
  data.forEach((item: { slug: any; _id: any }) => {
    if (!item.slug) {
      item.slug = item._id;
    }
  });

  data.sort((a: { role: string }, b: { role: string }) => {
    // Prioritize "Ansvarlig" and "Ansvarleg" within each role group
    const ansvarligPriority = (role: string) =>
      role.includes("Ansvarlig") || role.includes("Ansvarleg") ? 0 : 1;

    // Check high-level groups
    const rolePriority = (role: string) => {
      if (role === "Leder" || role === "Leiar") return 1;
      if (role === "Nestleder" || role === "Nestleiar") return 2;
      if (role.includes("Økonomi")) return 3;
      if (role.includes("Web")) return 4;
      if (role.includes("Bedrift")) return 5;
      if (role.includes("PR")) return 6;
      else return 7;
    };

    // Calculate priorities
    const aRolePriority = rolePriority(a.role);
    const bRolePriority = rolePriority(b.role);

    // First sort by role group
    if (aRolePriority !== bRolePriority) {
      return aRolePriority - bRolePriority;
    }

    // If within the same group, sort by whether they include "Ansvarlig" or "Ansvarleg"
    const aAnsvarligPriority = ansvarligPriority(a.role);
    const bAnsvarligPriority = ansvarligPriority(b.role);
    if (aAnsvarligPriority !== bAnsvarligPriority) {
      return aAnsvarligPriority - bAnsvarligPriority;
    }

    // If both have the same Ansvarlig status and are in the same group, sort alphabetically
    return a.role.localeCompare(b.role);
  });

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
        canonical="/om-oss/styremedlemmer"
      />
      <Styremedlemmer committeeMember={data} />
    </>
  );
}
