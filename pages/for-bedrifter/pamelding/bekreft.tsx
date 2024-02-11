import type { NextPage } from "next";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Confirm from "../../../components/for-bedrifter/pamelding/bekreft";

const ApplyCarrerFairConfirm: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Bekreft avtale- og påmeldingsvilår for ITxBERGEN sine karrieredager 2024"
        description="Bekreft vilkår for påmelding til ITxBERGEN (tidligere echo karriere) sine karrieredager i 2024."
        canonical="/for-bedrifter/pamelding/bekreft"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <Confirm />
        </div>
      </main>
    </div>
  );
};

export default ApplyCarrerFairConfirm;
