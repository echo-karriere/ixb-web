import type { NextPage } from "next";
import Karrieredagene from "../../../components/for-studenter/karrieredagene/karrieredagene.mdx";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Link from "next/link";
import { logos } from "../../../data/logo";
import LogoGrid from "../../../components/for-studenter/index/logoGrid";
import "remixicon/fonts/remixicon.css";

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
          <div className="max-w-4xl">
            <div className="max-w-3xl px-2">
              <Karrieredagene />
            </div>
            <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_12px,_black_calc(100%-12px),transparent_100%)]">
              <div className="overflow-x-auto no-scrollbar mt-4 px-2.5">
                <div className="flex gap-2 py-1">
                  <Link
                    className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md p-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500 flex flex-col items-center buttons-gradient"
                    href="/for-studenter/karrieredagene/timeplan">
                    <i className="ri-time-line" />
                    Timeplan
                  </Link>
                  <Link
                    className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md p-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500 flex flex-col items-center buttons-gradient"
                    href="/for-studenter/karrieredagene/standkart">
                    <i className="ri-map-pin-2-line" />
                    Standkart
                  </Link>
                  <Link
                    className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md p-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500 flex flex-col items-center buttons-gradient"
                    href="/arrangement/workshops">
                    <i className="ri-group-line" />
                    Workshops
                  </Link>
                  <Link
                    className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md p-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500 flex flex-col items-center buttons-gradient"
                    href="/arrangement/konseptpresentasjoner">
                    <i className="ri-pie-chart-2-line" />
                    Konseptpresentasjoner
                  </Link>
                  <Link
                    className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md p-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500 flex flex-col items-center buttons-gradient"
                    href="/arrangement/lunsjseminar-knowit--sparebanken-vest">
                    <i className="ri-cake-3-line" />
                    Lunsjseminar
                  </Link>
                  <div className="pr-2.5">
                    <Link
                      className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md p-4 mr- hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500 flex flex-col items-center"
                      href="/for-studenter/stillingsannonser">
                      <i className="ri-suitcase-line" />
                      Stillingsannonser
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>

            <LogoGrid logos={logos} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerFair;
