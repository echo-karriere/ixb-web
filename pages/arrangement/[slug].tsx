import type { SanityDocument } from "@sanity/client";
import { client } from "../../src/lib/sanity.client";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import { groq } from "next-sanity";
import { GetStaticPaths } from "next";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

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
    groq`*[_type == "event" && slug.current == $slug][0]{
      _id,
      title,
      slug,
        description,
        eventType,
        starttime,
        endtime,
        organizer,
        location,
        linkLocation,
        link
      
    }`,
    { slug }
  );

  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data =
    await client.fetch(groq`*[_type == "event" && defined(slug.current)]{
    slug
  }`);

  const paths = data.map((job: { slug: { current: string } }) => ({
    params: { slug: job.slug.current },
  }));

  return { paths, fallback: false };
};

export default function event({ data }: EventProps) {
  const {
    title,
    description,
    eventType,
    location,
    starttime,
    endtime,
    organizer,
    linkLocation,
    link,
  } = data;

  // content should be moved to a separate component, did it like this because of deployment issues with Vercel
  return (
    <>
      <HeadSEO
        title={`${title} | ITxBERGEN`}
        description={`Finn arrangementer som ${title}, og mer på ITxBERGEN.`}
        canonical={`/arrangement/${data.slug.current}`}
      />
      <div className="mb-12 mt-8 md:mt-12 flex flex-col items-center justify-center">
        <div className="md:grid md:grid-cols-3 md:gap-4 w-11/12 max-w-7xl">
          <div className="mb-4 static col-span-2 ...">
            <h1>{title}</h1>
            <span className="prose prose-slate">
              <PortableText value={description} />
            </span>
          </div>
          <hr className="my-4 bg-blue-200 md:hidden" />
          <div className="col-span-1 flex flex-col justify-left items-left">
            <p>
              <i
                aria-label="Arrangementstype:"
                className={`ri-record-circle-fill ${
                  eventType === "Annet"
                    ? "text-[#648fff]"
                    : eventType === "Workshop"
                    ? "text-[#fe6100]"
                    : eventType === "Konseptpresentasjon"
                    ? "text-[#785ef0]"
                    : eventType === "Karrieredag"
                    ? "text-[#ffb000]"
                    : eventType === "Arrangement"
                    ? "text-[#dc267f]"
                    : ""
                }`}
              />{" "}
              {eventType}
            </p>
            {starttime && (
              <>
                <p>
                  <i className="ri-calendar-line"></i>{" "}
                  {new Date(starttime).toLocaleDateString("nb-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <p>
                  <i className="ri-time-line"></i>{" "}
                  {new Date(starttime).toLocaleTimeString("nb-NO", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  -{" "}
                  {new Date(endtime).toLocaleTimeString("nb-NO", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </>
            )}
            <p>
              <i aria-label="Organiseres av:" className="ri-building-3-line" />{" "}
              {organizer}
            </p>
            <p>
              <i
                aria-label="Arrangementet finner sted:"
                className="ri-map-pin-line"
              />{" "}
              {location}
            </p>

            <a
              href={`${linkLocation}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border text-center border-transparent mt-2 p-1 px-2 font-sm text-gray-900 bg-gray-200 hover:bg-gray-300 w-fit focus:outline-none focus:ring-4 rounded focus:ring-yellow-400">
              <i className="ri-map-line" /> Vis på kart
              <i
                aria-label="Ekstern lenke"
                className="ri-external-link-fill ml-2"
              />
            </a>

            <a
              href={`data:text/calendar;charset=utf8,${encodeURIComponent(
                `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://itxbergen.no/arrangement/${data.slug.current}
DTSTART:${new Date(starttime).toISOString().replace(/-|:|\.\d\d\d/g, "")}
DTEND:${new Date(endtime).toISOString().replace(/-|:|\.\d\d\d/g, "")}
SUMMARY:${title}
DESCRIPTION:For mer informasjon om arrangementet, gå til <a href="https://itxbergen.no/arrangement/${
                  data.slug.current
                }">itxbergen.no/arrangement/${data.slug.current}</a> 
                
LOCATION:${location}
END:VEVENT
END:VCALENDAR`
              )}`}
              download={`${title}.ics`}
              className="border border-transparent mt-2 p-1 px-2 font-sm text-gray-900 bg-gray-200 hover:bg-gray-300 w-fit focus:outline-none focus:ring-4 rounded focus:ring-yellow-400">
              <i className="ri-calendar-line" /> Legg til i kalender
            </a>

            <Link
              href="/debug"
              className="border border-transparent mt-2 p-1 px-2 font-sm text-gray-900 bg-gray-200 hover:bg-gray-300 w-fit focus:outline-none focus:ring-4 rounded focus:ring-yellow-400">
              <i className="ri-bug-line" /> Debug
            </Link>

            {link ? (
              <div className="border border-gray-900 border-transparent mt-2 p-4 font-sm rounded text-gray-900 bg-gray-200 ">
                <i className="ri-information-line mr-2" />
                <b>Påmelding nødvendig</b>
                <br />

                <p>
                  For å kunne delta på dette arrangementet må du melde deg på.
                  Trykk på knappen under for å gå til påmeldingssiden.
                </p>
                <br />
                <a
                  href={`${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border text-center border-transparent p-2 font-sm text-gray-100 bg-blue-500 hover:bg-blue-700 w-32 focus:outline-none focus:ring-4 rounded focus:ring-yellow-400">
                  Gå til påmelding
                  <i
                    aria-label="Ekstern lenke"
                    className="ri-external-link-fill ml-2"
                  />
                </a>

                <br />
              </div>
            ) : (
              <div className="border border-gray-900 border-transparent mt-2 p-4 font-sm rounded text-gray-900 bg-gray-200  ">
                <i className="ri-information-line mr-2" />
                <b>Ingen påmelding nødvendig</b>
                <br />

                <p>
                  Det er ikke nødvendig å melde seg på dette arrangementet, så
                  det er bare å møte opp!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
