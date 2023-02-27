import type { NextPage } from "next";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import ForStudenter from "../../components/for-studenter/index/for-studenter.mdx";

const ForStudents: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="For studenter | ITxBERGEN"
        description="Informasjon om ITxBERGEN for studenter, og informajon om hva vi kan tilby deg som student."
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <ForStudenter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForStudents;
