import { HeadSEO } from "../components/common/functions/HeadSEO";
import Sommerjobb from "../components/sommerjobb.mdx";

export default function SummerInternships() {
  return (
    <>
      <HeadSEO
        title="Sommerjobb frister | ITxBERGEN"
        description="Informasjon om sommerjobb frister"
        canonical="/sommerjobb-frister"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Sommerjobb />
          </div>
        </div>
      </main>
    </>
  );
}
