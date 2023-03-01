import type { NextPage } from "next";

import Cookies from "../../components/info/informasjonskapsler/informasjonskapsler.mdx";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const Informasjonskapsler: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Informasjonskapsler | ITxBergen"
        description="Les om hvordan ITxBERGEN bruker informasjonskapsler (cookies) på sine nettsider, samt instruksjoner om hvordan du kan slette eller deaktivere informasjonskapsler."
        canonical="/info/informasjonskapsler"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Cookies />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Informasjonskapsler;
