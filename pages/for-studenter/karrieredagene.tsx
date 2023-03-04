import type { NextPage } from "next";
import Karrieredagene from "../../components/for-studenter/karrieredagene/karrieredagene.mdx";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const CareerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Karrieredagene 2023 | ITxBERGEN"
        description="Informasjon om Karrieredagene 2023. Mer informasjon kommer."
        canonical="/for-studenter/karrieredagene"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Karrieredagene />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerFair;
