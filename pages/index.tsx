import type { NextPage } from "next";
import Hero from "../components/index/hero";
import Notification from "../components/index/notification";
import LogoCloud from "../components/index/logocloud";
import { HeadSEO } from "../components/common/functions/HeadSEO";
import Infosection from "../components/index/infosection";

const Home: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="ITxBergen - Vi samler IT-studentene i Bergen"
        description="ITxBERGEN (tidligere kjent som echo karriere) er en studentgruppe som arrangerer karrieredager hvor IT-studenter kan bli kjent med fremtidige arbeidsgivere, samt få et innblikk i hvordan arbeidsmarkedet ser ut for IT-studenter i Bergen og Norge."
        canonical="/"
      />
      <main>
        <Hero />
        <Notification />
        <LogoCloud />
        <Infosection />
        <br />
      </main>
    </div>
  );
};

export default Home;
