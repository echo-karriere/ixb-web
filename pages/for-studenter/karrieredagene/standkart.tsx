import type { NextPage } from "next";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import Image from "next/image";

const CareerFair: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Karrieredagene - standkart | ITxBERGEN"
        description="Oversikt over hvor du vil finne de ulike bedriftene på karrieredagen til ITxBergen."
        canonical="/for-studenter/karrieredagene/standkart"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>Standkart</h1>
            <p>
              Her er en oversikt over hvor de ulike bedriftene vil stå på
              karrieredagene. Klikk på kartet for å se det i full størrelse.
            </p>
            <br />
            <h2>Standkart for torsdag 14. september</h2>
            <a href="/karrieredagene/standkart-torsdag.jpg" >
              <Image
                src="/karrieredagene/standkart-torsdag-udato.jpg"
                alt="Standkart for torsdag"
                width={1000}
                height={1000}
              />
            </a>
            <br />
            <h2>Standkart for fredag 15. september</h2>
            <a href="/karrieredagene/standkart-fredag.jpg">
              <Image
                src="/karrieredagene/standkart-fredag-udato.jpg"
                alt="Standkart for fredag"
                width={1000}
                height={1000}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerFair;
