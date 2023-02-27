import type { NextPage } from "next";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import Snittkalkulator from "../../components/for-studenter/snittkalkulator/snittkalkulator.js";

const calculator: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Regn ut karaktersnittet for høgskole og universitet | ITxBERGEN"
        description="Regn ut karaktersnittet ditt for høgskole og universitet. Vi har laget en snittkalkulator som gjør det enkelt å regne ut snittet ditt."
      />
      <main>
        <Snittkalkulator />
      </main>
    </div>
  );
};

export default calculator;
