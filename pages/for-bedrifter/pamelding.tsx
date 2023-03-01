import type { NextPage } from "next";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import Pamelding from "../../components/for-bedrifter/pamelding/pamelding";

const ApplyCarrerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Påmelding til ITxBERGEN sine karrieredager 2023"
        description="Ønsker du og din bedrift å være med på ITxBERGEN (tidligere echo karriere) sine karrieredager i 2023? Her kan du melde dere på."
        canonical="/for-bedrifter/pamelding"
      />
      <main>
        <Pamelding />
      </main>
    </div>
  );
};

export default ApplyCarrerFair;
