import type { NextPage } from "next";
import { HeadSEO } from "../../../components/common/functions/HeadSEO";
import  Timeplan  from "../../../components/for-studenter/karrieredagene/timeplan";

const CareerFairTime: NextPage = () => {
  return (
    <div>
      <HeadSEO
        title="Karrieredagene - timeplan | ITxBERGEN"
        description="Oversikt over hva som skjer når på karrieredagene til ITxBergen."
        canonical="/for-studenter/karrieredagene/timeplan"
      />
      <main>
  
            <Timeplan />
          
      </main>
    </div>
  );
};

export default CareerFairTime;
