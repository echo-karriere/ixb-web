import type { SanityDocument } from "@sanity/client";
import { client } from "../../../src/lib/sanity.client";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import { groq } from "next-sanity";
import { GetStaticPaths } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

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
      company,
      logo,
      type,
      location,
      description,
      deadline,
      link
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
  const { title, company, logo, type, location, description, deadline } = data;

  // create a builder for the image URL
  const builder = imageUrlBuilder(client);

  // set the image size and format
  const imageUrl = builder.image(logo).size(400, 200).format("jpg").url();

  return (
    <>
      <HeadSEO
        title={`${title} | ITxBERGEN`}
        description={"Utforsk flere stillingsannonser på ixb.no"}
      />
      <div className="mb-12 mt-8 md:mt-12 flex flex-col items-center justify-center">
        <div className="md:grid md:grid-cols-3 md:gap-4 w-11/12 max-w-7xl">
          <div className="mb-4 static col-span-2 ...">
            <h1>{title}</h1>
            <PortableText value={description} />
          </div>
          <hr className="my-4 bg-blue-200 md:hidden" />
          <div className="col-span-1 flex flex-col justify-left items-left">
            <div className="mb-4">
              <Image
                src={imageUrl}
                alt={`Logoen til ${company}`}
                width={400}
                height={400}
                className="rounded h-28 w-28"
              />
            </div>
            <p className="font-bold">
              <i aria-label="Bedrift:" className="ri-building-3-line"/> {company}
            </p>
            <p>
              <i aria-label="Lokalisjoner hvor stillingen er relevant:" className="ri-map-pin-line"/> {location.join(", ")}
            </p>
            <p>
              <i aria-label="Jobbtype:" className="ri-suitcase-line"/> {type}
            </p>
            {deadline && (
              <p>
                <i className="ri-calendar-line"></i> Frist:{" "}
                {new Date(deadline).toLocaleDateString("nb-NO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}

            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Trykk her for å gå til søknaden for stillingen - ${title}, Ekstern lenke.`}
              className="mt-4 bg-blue-500 hover:bg-blue-700 w-1/2 text-white font-bold py-2 px-4 rounded flex justify-center items-center">
              <span className="text-center">Søk nå</span>
              <i className="ri-external-link-fill ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
