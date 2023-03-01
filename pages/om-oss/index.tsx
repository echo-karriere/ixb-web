import type { NextPage } from "next";
import { HeadSEO } from "../../components/common/functions/HeadSEO";
import OmOss from "../../components/om-oss/index/om-oss.mdx";

const AboutUs: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Om oss | ITxBERGEN"
        description="Hvem er vi og hva gjør vi? Les mer om ITxBERGEN her, og hva vi jobber med og hva vi står for."
        canonical="/om-oss"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <OmOss />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
