import { PortableText } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "../../../src/lib/sanity.client";
import Head from "next/head";

const builder = imageUrlBuilder(client);

export default function Joblisting({
  joblisting,
}: {
  joblisting: SanityDocument;
}) {
  return (
    <>
      <Head>
        <title>{joblisting.title}</title>
      </Head>
      <div className="mb-12 mt-8 md:mt-12 flex flex-col items-center justify-center">
        <div className="md:grid md:grid-cols-3 md:gap-4 w-11/12 max-w-7xl">
          <div className="mb-4 static col-span-2 ...">
            <h1 className="text-3xl sm:text-4xl font-bold">
              {joblisting.title}
            </h1>
            <hr className="my-4" />

            <PortableText value={joblisting.description} />
          </div>
          <hr className="my-4 bg-blue-200 md:hidden" />
          <div className="sticky right-0  col-span-1 ...">
            <div>
              <Image
                src={builder.image(joblisting.logo).url()}
                alt={joblisting.company}
                width={200}
                height={200}
                className="rounded-md mb-4 h-28 w-28"
              />
              <p className=" font-bold">
                <i className="ri-building-3-line"></i> {joblisting.company}{" "}
              </p>
              <p>
                <i className="ri-map-pin-line"></i>{" "}
                {joblisting.location.join(", ")}{" "}
              </p>
              <p>
                <i className="ri-suitcase-line"></i> {joblisting.type}
              </p>
              {joblisting.deadline && (
                <p>
                  <i className="ri-calendar-line"></i> Frist:{" "}
                  {new Date(joblisting.deadline).toLocaleDateString("nb-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
              <small className="text-gray-500">
                Annonse ID: {joblisting.slug.current}
              </small>
              <br />
              <a href={`${joblisting.link}`} target="_blank" rel="noreferrer">
                <button className="w-1/2 text-white bg-gray-600 hover:bg-gray-900 focus:bg-gray-900 rounded-md font-bold p-2 mt-4">
                  <p>Gå til søknad</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
