import type { NextPage } from "next";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import ForBedrifter from "../../components/for-bedrifter/index/for-bedrifter.mdx";

const ForCompanies: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="For bedrifter | ITxBERGEN"
        description="Informasjon om ITxBERGEN for bedrifter, og informajon om hva vi kan tilby til bedrifter."
        canonical="/for-bedrifter"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <ForBedrifter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForCompanies;
