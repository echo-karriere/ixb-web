import type { NextPage } from "next";

import Personvern from "../../components/info/personvern/personvern.mdx";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const Privacy: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Personvernerklæring | ITxBergen"
        description="Les om hvordan ITxBERGEN behandler dine personopplysninger."
        canonical="/info/personvern"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Personvern />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
