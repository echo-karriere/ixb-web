import type { NextPage } from "next";
import ContactUsHere from "../../components/om-oss/kontakt-oss/kontakt-oss.mdx";

import { HeadSEO } from "../../components/common/functions/HeadSEO";

const ContactUs: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Kontakt oss | ITxBERGEN"
        description="Informasjon om hvordan du kan komme i kontakt med oss."
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <ContactUsHere />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
