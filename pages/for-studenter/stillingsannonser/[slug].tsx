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
  const builder = imageUrlBuilder(client);
  const imageUrl = builder.image(logo).size(200, 200).format("jpg").url();

  // content should be moved to a separate component, did it like this because of deployment issues with Vercel
  return (
    <>
      <HeadSEO
        title={`${title} | ITxBERGEN`}
        description={`Ta en titt på stillingsannonsen til ${company}, og finn flere stillinger for IT-studenter og nyutdannede på ITxBERGEN sin side.`}
        canonical={`/for-studenter/stillingsannonser/${data.slug.current}`}
        author={company}
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
                className="rounded h-36 w-36"
              />
            </div>
            <p className="font-bold">
              <i aria-label="Bedrift:" className="ri-building-3-line" />{" "}
              {company}
            </p>
            <p>
              <i
                aria-label="Lokalisjoner hvor stillingen er relevant:"
                className="ri-map-pin-line"
              />{" "}
              {location.join(", ")}
            </p>
            <p>
              <i aria-label="Jobbtype:" className="ri-suitcase-line" /> {type}
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
              className="mt-4 bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded flex justify-center items-center">
              <span className="text-center">Gå til søknad</span>
              <i className="ri-external-link-fill ml-2" />
            </a>

            <button
              onClick={() => {
                // open the share dialog
                if (navigator.share) {
                  navigator
                    .share({
                      title: `Ta en titt på denne stillingsannonsen til ${company} på ITxBERGEN sin nettside.`,
                      url: `https://ixb.no/for-studenter/stillingsannonser/${data.slug.current}`,
                    })
                    .then(() => console.log("Successful share"))
                    .catch((error) => console.log("Error sharing", error));

                  document.getElementById("shareButton")!.innerHTML =
                    "Velg hvordan du vil dele stillingen";

                  setTimeout(() => {
                    document.getElementById("shareButton")!.innerHTML =
                      "Del stillingen på nytt";
                  }, 3000);
                } else {
                  // fallback to copy to clipboard
                  const url = window.location.href;
                  const el = document.createElement("textarea");
                  el.value = url;
                  document.body.appendChild(el);
                  el.select();
                  document.execCommand("copy");
                  document.body.removeChild(el);

                  // change id to "shareButton" to show the text for 3 seconds
                  document.getElementById("shareButton")!.innerHTML =
                    "Lenke kopiert til utklippstavlen";

                  setTimeout(() => {
                    document.getElementById("shareButton")!.innerHTML =
                      "Del stillingen på nytt";
                  }, 3000);
                }
              }}
              className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 w-full font-semibold py-2 px-4 rounded flex justify-center items-center">
              <span id="shareButton" className="text-center ">
                Del stillingen
              </span>
            </button>

            <button
              onClick={() => {
                if (typeof localStorage === "undefined") {
                  // localStorage is not available
                  // handle the error here
                  return;
                }
                const favorites = JSON.parse(
                  localStorage.getItem("favorites") || "[]"
                );
                const jobId = data._id;
                const index = favorites.indexOf(jobId);
                if (index > -1) {
                  favorites.splice(index, 1);
                  localStorage.setItem("favorites", JSON.stringify(favorites));
                  document.getElementById("favoriteButton")!.innerHTML =
                    "Legg til i favoritter";
                } else {
                  favorites.push(jobId);
                  localStorage.setItem("favorites", JSON.stringify(favorites));
                  document.getElementById("favoriteButton")!.innerHTML =
                    "Fjern fra favoritter";
                }
              }}
              className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 w-full font-semibold py-2 px-4 rounded flex justify-center items-center">
              <span id="favoriteButton" className="text-center">
                {typeof localStorage !== "undefined" &&
                JSON.parse(localStorage.getItem("favorites") || "[]").includes(
                  data._id
                )
                  ? "Fjern fra favoritter"
                  : "Legg til i favoritter"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
