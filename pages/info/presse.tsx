import type { NextPage } from "next";
import Presse from "../../components/info/presse/presse.mdx";

import { HeadSEO } from "../../components/common/functions/HeadSEO";

const Press: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Presse | ITxBERGEN"
        description="Informasjon til pressen om ITxBERGEN"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Presse />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Press;
