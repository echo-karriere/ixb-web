import type { NextPage } from "next";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";


const CareerFairTime: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Karrieredagene - timeplan | ITxBERGEN"
        description="Oversikt over hva som skjer når på karrieredagene til ITxBergen."
        canonical="/for-studenter/karrieredagene/timeplan"
      />
      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <h1>Timeplan</h1>
            <p>
              Her vil vi senere komme med en oversikt over hva som skjer når på
              karrieredagene.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerFairTime;
