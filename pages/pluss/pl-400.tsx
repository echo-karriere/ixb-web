import type { NextPage } from "next";

import PL400 from "../../components/pluss/pl-400.mdx";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const PLUSS400: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Løsningsforslag på feilkode PL-400 | ITxBergen"
        description="Løsninger om du skulle få problemer med din PLUSS+ konto."
        canonical="/pluss/pl-400"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <PL400 />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PLUSS400;
