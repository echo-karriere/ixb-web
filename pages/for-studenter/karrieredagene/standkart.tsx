import type { NextPage } from "next";
import Karrieredagene from "../../../components/for-studenter/karrieredagene/karrieredagene.mdx";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Link from "next/link";

const CareerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Karrieredagene - standkart | ITxBERGEN"
        description="Oversikt over hvor du vil finne de ulike bedriftene på karrieredagen til ITxBergen."
        canonical="/for-studenter/karrieredagene/standkart"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>Standkart</h1>
            <p>
              Her vil vi senere laste opp et standkart over hvor du vil finne de
              ulike bedriftene på karrieredagen.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerFair;
