import type { NextPage } from "next";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Success from "../../../components/for-bedrifter/pamelding/success";

const ApplyCarrerFairConfirm: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Bedriften er nå påmeldt til ITxBERGEN sin karrieredag 2024"
        description="Bedriften er nå påmeldt til ITxBERGEN sin karrieredag i 2024."
        canonical="/for-bedrifter/pamelding/success"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <Success />
        </div>
      </main>
    </div>
  );
};

export default ApplyCarrerFairConfirm;
