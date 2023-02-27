import type { NextPage } from "next";
import Hero from "../components/index/hero";
import Notification from "../components/index/notification";
import LogoCloud from "../components/index/logocloud";
import { HeadSEO } from "../components/common/functions/HeadSEO";

const Home: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="ITxBergen - Vi arrangerer karrieredager for IT-studenter"
        description="ITxBERGEN (tidligere kjent som echo karriere) er en studentgruppe som arrangerer karrieredager hvor IT-studenter kan bli kjent med fremtidige arbeidsgivere, samt få et innblikk i hvordan arbeidsmarkedet ser ut for IT-studenter i Bergen og Norge."
      />
      <main>
        <Hero />
        <Notification />
        <LogoCloud />

        <br />
      </main>
    </div>
  );
};

export default Home;
