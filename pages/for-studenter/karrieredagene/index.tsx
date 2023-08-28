import type { NextPage } from "next";
import Karrieredagene from "../../../components/for-studenter/karrieredagene/karrieredagene.mdx";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
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
            <Karrieredagene />
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
                href="/for-studenter/karrieredagene/timeplan">
                Timeplan
              </Link>
              <Link
                className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
                href="/for-studenter/karrieredagene/standkart">
                Standkart
              </Link>
              <Link
                className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
                href="/arrangement/lunsjseminar-knowit--sparebanken-vest">
                Lunsjseminar
              </Link>
              <Link
                className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
                href="/arrangement/workshops">
                Workshops
              </Link>
              <Link
                className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
                href="/404">
                Konseptpresentasjoner
              </Link>
              <Link
                className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
                href="/for-studenter/stillingsannonser">
                Stillingsannonser
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerFair;
