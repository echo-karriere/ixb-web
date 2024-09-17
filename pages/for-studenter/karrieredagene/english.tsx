import type { NextPage } from "next";

import { HeadSEO } from "../../../components/common/functions/HeadSEO";

import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { ExternalLink } from "../../../components/common/functions/externalLink";
import { InternalLink } from "../../../components/common/functions/internalLink";

const CareerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Career Fair for IT-Students | ITxBERGEN"
        description="Information about ITxBergen's career fair for IT students."
        canonical="/for-studenter/karrieredagene/english"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>Career Fair for IT-Students</h1>
            <p>
              Welcome to ITxBergen&apos;s Career Fair for IT students in the
              Bergen area. This year&apos;s Career Fair will take place on
              September 19th and will be held at{" "}
              <ExternalLink
                href="https://maps.app.goo.gl/X7WFoc8XboGbw5yS8"
                linkText="Grieghallen"
              />{" "}
              (Please use the{" "}
              <ExternalLink
                href="https://www.google.com/maps/@60.3882061,5.3275722,3a,34.2y,55.56h,88.91t/data=!3m7!1e1!3m5!1sRaaCX-jLrl5pplMWPkpatg!2e0!5s20230901T000000!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                linkText="Peer Gynt entrance"
              />
              ). On this page, you will find resources for the Career Fair,
              including events and other information.
            </p>
            <h2>Schedule:</h2>

            <p>
              <span className="font-bold">Balloon Drop</span>: 10:00 - 10:15
              (Ground Floor)
            </p>
            <p>
              We’re starting the career fair with a balloon drop, and some of
              the balloons will contain prizes! Be sure to arrive by 10:00 to
              join in. Who knows, you might be one of the lucky winners!
            </p>
            <br />

            <p>
              <span className="font-bold">Lightning Talks</span>: 10:15 - 11:30
              (Ground Floor)
            </p>
            <p>
              Curious about which companies are participating in the career
              fair? Attend the lightning talks for a quick introduction to some
              of the companies that are attending. Please note that it will be
              in Norwegian.
            </p>
            <br />
            <p>
              <span className="font-bold">
                Visit the Companies at their Stands{" "}
              </span>
              : 11:30 - 16:00 (2nd Floor)
            </p>
            <p>
              Stop by the company stands to ask questions and explore the
              opportunities available to you. During this time, you can also
              attend workshops and concept presentations. For more details and
              to sign up for workshops and presentations (which will be held at
              the 3rd floor), check the links below. Please note that most
              sessions will likely be conducted in Norwegian.
            </p>
            <br />
            <ul>
              <li>
                <InternalLink
                  href="/arrangement/workshops"
                  linkText="More information about the workshops (in norwegian)"
                />
              </li>
              <li>
                <InternalLink
                  href="/arrangement/konseptpresentasjoner"
                  linkText="More information about the concept presentations (in norwegian)"
                />
              </li>
            </ul>
            <br />

            <p>
              <span className="font-bold">Banquet</span>: 19:00 - 00:30
            </p>
            <p>
              Some students may be fortunate enough to receive a special
              invitation to the banquet from one of the companies. Further
              details will be shared directly with those invited.
            </p>
            <br />
            <p className="italic">
              Note that in Norway, the 1st floor is considered the same as the
              ground floor. What might be referred to as the &quot;Ground
              Floor&quot; in other countries is regarded as the floor below the
              first floor in Norway.
            </p>
            <h2>Attending Companies</h2>
            <p>
              An overview of the companies attending the career fair{" "}
              <Link
                className="text-blue-600 underline"
                href="/for-studenter/karrieredagene#attending">
                can be found here
              </Link>
              .
            </p>

            <h2>Map of the Stand Area</h2>
            <p>
              An overview of the stand area can be{" "}
              <InternalLink
                href="/files/standkart.pdf"
                linkText="downloaded from here"
              />
            </p>
            <h2>Job Listings and Internship Opportunities</h2>
            <p>
              We are collecting job listings and internship opportunities from
              several companies on our website. Some of the listings might also
              be available in English.{" "}
              <Link
                className="text-blue-600 underline"
                href="/for-studenter/stillingsannonser">
                Click here to see the listings
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerFair;
