import type { NextPage } from "next";

import Purchaseterms from "../../components/info/pameldingsvilkar/pameldingsvilkar.mdx";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const Pameldingsvilkar: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Salgs- og påmeldingsvilkår | ITxBergen"
        description="Les om våre Salgs- og påmeldingsvilkår for våre arrangementer hos ITxBERGEN"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Purchaseterms />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pameldingsvilkar;
