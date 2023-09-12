import type { NextPage } from "next";
import Karrieredagene from "../../../components/for-studenter/karrieredagene/karrieredagene.mdx";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Shortcuts from "../../../components/for-studenter/karrieredagene/shortcuts";
import { logos } from "../../../data/logo";
import LogoGrid from "../../../components/for-studenter/karrieredagene/logoGrid";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";

const CareerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Karrieredagene 2023 | ITxBERGEN"
        description="Informasjon over hva som skjer på karrieredagene til ITxBergen."
        canonical="/for-studenter/karrieredagene"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>Career Fair for IT-Students</h1>
            <p>
              Welcome to ITxBergen's career fair for IT students in the Bergen
              area. This year, the career days will be held on September 14th
              and 15th, and will be held in{" "}
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
            <p>
              <span className="font-bold text-md">Balloon Drop</span>: 10:00 AM
              - 10:15 AM
            </p>
            <p className="mt-2">
              We are kicking off the career fair with a balloon drop. There will
              be prizes in some of the balloons. Show up by 10:00 to
              participate. Maybe you're lucky and win?
            </p>
            <br />
            <p>
              <span className="font-bold text-md">Lightning Talks</span>: 10:15
              AM - 11:30 PM
            </p>
            <p>
              Are you curious about which companies are participating in the
              career fair? Attend the lightning talks to get a brief
              introduction to those who are participating.
            </p>
            <br />
            <p>
              <span className="font-bold text-md">
                Visit companies at their stands
              </span>
              : 11:30 AM - 04:00 PM
            </p>
            <p>
              Visit the companies at their stands, and ask them questions that
              you might have, or find out more about your oppertunities.
              <br /> <br />
              During this time, it is possible to attend different workshops,
              lunch seminars and concept presentations. Just be aware that they
              will most likely be held in Norwegian.{" "}
            </p>{" "}
            <br />
            <ul>
              <li>
                {" "}
                <Link
                  className="text-blue-600 underline"
                  href="/arrangement/workshops">
                  More information about the workshops (in norwegian)
                </Link>
              </li>
              <li>
                <Link
                  className="text-blue-600 underline"
                  href="/arrangement/konseptpresentasjoner">
                  More information about the concept presentations (in
                  norwegian)
                </Link>
              </li>
              <li>
                <Link
                  className="text-blue-600 underline"
                  href="/arrangement/lunsjseminar">
                  More information about the lunch seminars (in norwegian)
                </Link>
              </li>
            </ul>
            <br />
            <p>
              <span className="font-bold text-md">Banquet (Friday)</span>: 07:00
              PM - 02:00 AM
            </p>
            <p className="mt-2">
              For those students who are extra lucky, they might get an
              invitation to the banquet from one of the companies. More
              information about the banquet will be provided to those invited.
            </p>
            <h2>Companies Attending</h2>
            <p>
              An overview of the companies attending the career fair{" "}
              <Link
                className="text-blue-600 underline"
                href="/for-studenter/karrieredagene#attending">
                can be found here
              </Link>
              . Click on their logo to see where they are located at the career
              fair. 'Torsdag' means that they are attending on Thursday, and
              'Fredag' means that they are attending on Friday.
            </p>
            <h2>Job Listings and Internship Opportunities</h2>
            <p>
              We are collecting job listings and internship opportunities from
              several companies on our website. Some of the listings are also
              available in English.{" "}
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
