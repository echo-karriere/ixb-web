import type { NextPage } from "next";

import { HeadSEO } from "../../../components/common/functions/HeadSEO";

import "remixicon/fonts/remixicon.css";
import Link from "next/link";

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
              Welcome to ITxBergen&#39;s career fair for IT students in the
              Bergen area. This year, the career fair will be held on September
              19th in{" "}
              <Link
                className="text-blue-600 underline"
                href="https://goo.gl/maps/sma7WGLp3tBggsC67"
                target="_blank">
                Grieghallen <i className="ri-external-link-line"></i>
              </Link>
              . On this page you will find usefull information about the career
              fair.
            </p>
            <h2>Schedule:</h2>
            <p>We will soon publish the schedule for the career fair.</p>
            <h2>Companies Attending</h2>
            <p>
              An overview of the companies attending the career fair{" "}
              <Link
                className="text-blue-600 underline"
                href="/for-studenter/karrieredagene#attending">
                can be found here
              </Link>
              .
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
