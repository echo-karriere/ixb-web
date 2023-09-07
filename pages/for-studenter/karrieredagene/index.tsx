import type { NextPage } from "next";
import Karrieredagene from "../../../components/for-studenter/karrieredagene/karrieredagene.mdx";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Shortcuts from "../../../components/for-studenter/index/shortcuts";
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
            <Karrieredagene />
          </div>
          <Shortcuts />
          <LogoGrid logos={logos} />
        </div>
      </main>
    </div>
  );
};

export default CareerFair;
