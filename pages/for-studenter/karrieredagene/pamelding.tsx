import type { NextPage } from "next";

import { HeadSEO } from "../../../components/common/functions/HeadSEO";

import "remixicon/fonts/remixicon.css";
import Link from "next/link";

const CareerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Påmelding | ITxBERGEN"
        description="Påmeldingen åpner 12. september."
        canonical="/for-studenter/karrieredagene/pamelding"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>Påmeldingen har ikke åpnet</h1>
            <p>
              Påmeldingen for dette arrangementet åpner 12. september kl 12:00.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerFair;
