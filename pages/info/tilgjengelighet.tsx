import type { NextPage } from "next";
import Accessibility from "../../components/info/tilgjengelighet/tilgjengelighet.mdx";
import { HeadSEO } from "../../components/common/functions/HeadSEO";

const Tilgjengelighet: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Tilgjengelighet | ITxBergen"
        description="Les om hvordan vi i ITxBERGEN jobber for å gjøre våre nettsider og arrangementer tilgjengelig for alle sammen."
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Accessibility />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tilgjengelighet;
