

import type { NextPage } from "next";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import Pamelding from "../../components/for-bedrifter/pamelding/pamelding";

const ApplyCarrerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Påmelding til ITxBERGEN sine karrieredager 2023"
        description="Ønsker du og din bedrift å være med på ITxBERGEN sine karrieredager i 2023? Her kan du melde dere på."
      />
      <main>
       <Pamelding />
      </main>
    </div>
  );
};

export default ApplyCarrerFair;
