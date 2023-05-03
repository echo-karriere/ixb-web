import type { SanityClient, SanityDocument } from "@sanity/client";
import { client } from "../../src/lib/sanity.client";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import { groq } from "next-sanity";
import { GetStaticPaths } from "next";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

interface EventProps {
  data: SanityDocument;
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const data = await client.fetch(
    groq`*[_type == "news" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
    content,
    newsimage,
    
    }`,
    { slug }
  );

  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data =
    await client.fetch(groq`*[_type == "news" && defined(slug.current)]{
    slug
  }`);

  const paths = data.map((job: { slug: { current: string } }) => ({
    params: { slug: job.slug.current },
  }));

  return { paths, fallback: false };
};

export default function news({ data }: EventProps) {
  const { title, content, newsimage } = data;
  let imageUrl;
  if (newsimage) {
    const builder = imageUrlBuilder(client);
    imageUrl = builder.image(newsimage).size(1920, 1080).format("jpg").url();
  }

  // content should be moved to a separate component, did it like this because of deployment issues with Vercel
  return (
    <>
      <HeadSEO
        title={`${title} | ITxBERGEN`}
        description={`Finn arrangementer som ${title}, og mer på ITxBERGEN.`}
        canonical={`/arrangement/${data.slug.current}`}
      />
      <div className="mb-12 mt-8 md:mt-12 flex flex-col items-center justify-center">
        <div className="w-11/12 max-w-2xl">
          <div className="mb-4 static">
            <h1>{title}</h1>
            {imageUrl ? (
              <>
                <Image src={imageUrl} alt={title} width={1920} height={1080} />
                <br />
              </>
            ) : null}
            <p className="text-sm text-gray-500">
              Publisert:{" "}
              {new Date(data._createdAt).toLocaleDateString("no-NO", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "Europe/Oslo",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>

            {data._createdAt !== data._updatedAt ? (
              <p className="text-sm text-gray-500">
                Oppdatert:{" "}
                {new Date(data._updatedAt).toLocaleDateString("no-NO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "Europe/Oslo",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>
            ) : null}

            <br />
            <span className="prose prose-slate">
              <PortableText value={content} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
