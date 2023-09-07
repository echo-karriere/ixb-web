import type { NextPage } from "next";
import { HeadSEO } from "../../../../components/common/functions/HeadSEO";
import Image from "next/image";
import Link from "next/link";
import { companydata } from "../../../../data/companyData"; // Import the new companydata array
import { useRouter } from "next/router"; // Import useRouter
import "remixicon/fonts/remixicon.css";
import Events from "../../../../components/arrangement/eventPage";
import { GetStaticProps, GetStaticPaths } from "next"; // Import GetStaticPaths
import { client } from "../../../../src/lib/sanity.client";
import { groq } from "next-sanity";

const EventQuery = groq`*[_type == "event"] {
  _id,
  title,
  slug,
  starttime,
  endtime,
  organizer,
  eventType,
  location,
} | order(starttime asc)`;

const CareerFair: NextPage<{ events: any[] }> = ({ events }) => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the matching company object in the companydata array
  const companyObject = companydata.find(
    (company) => company.companyName.toLowerCase() === slug
  ); // Use toLowerCase to make it case-insensitive

  // Get the company name if it exists, or a default value if not found
  const companyName = companyObject
    ? companyObject.companyName
    : "Company Not Found";

  // Get the SVG map if it exists, or an empty string if not found
  const svgmap = companyObject ? companyObject.svgmap : "";

  // Get the company URL if it exists, or an empty string if not found
  const companyUrl = companyObject ? companyObject.companyUrl : "";

  return (
    <div>
      <HeadSEO
        title={`${companyName} | ITxBERGEN`} // Use the companyName here
        description={`Her finner du informasjon om ${companyName} på karrieredagene til ITxBergen.`} // Use the companyName here
        canonical={`/for-studenter/karrieredagene/${slug}`} // Use the slug here
      />
      <main className="flex flex-col items-center justify-center ">
        <div className="max-w-screen-md w-full mt-6 md:mt-10 text-center">
          <h1>{companyName}</h1>
          <center>
            <div className="w-11/12 flex justify-center p-2">
              {svgmap && (
                <Image
                  src={svgmap}
                  alt={companyName}
                  height={500} // Adjust the height for mobile
                  width={500} // Adjust the width for mobile
                  className="max-w-11/12"
                />
              )}
            </div>
          </center>
        </div>
        <div className="w-11/12 max-w-lg px-3.5 mt-4">
          {companyUrl && (
            <Link
              href={companyUrl}
              target="_blank"
              className="bg-gray-200 hover:bg-gray-300 font-bold p-4 text-center rounded-sm flex items-center justify-center">
              Gå til {companyName} sin nettside
              <i className="ri-external-link-line pl-1"></i>
            </Link>
          )}

          <div className="max-w-11/12 mx-auto">
            <Events
              events={events.filter((event: { organizer: string }) =>
                event.organizer.toLowerCase().includes(slug as string)
              )}
            />
            <div className="max-w-11/12 mx-auto"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await client.fetch(EventQuery);

  return {
    props: {
      events,
    },
  };
};

// Implement getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all available company slugs
  const paths = companydata.map((company) => ({
    params: { slug: company.companyName.toLowerCase() }, // Use toLowerCase to make it case-insensitive
  }));

  return {
    paths,
    fallback: false, // Set to true if you have dynamic data not available at build time
  };
};

export default CareerFair;
