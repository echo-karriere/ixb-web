import NewName from "../components/nytt-navn.mdx";
import { HeadSEO } from "../components/common/functions/HeadSEO";

export default function newName() {
  return (
    <>
      <HeadSEO
        title="Adjø echo karriere. Hallo ITxBERGEN!"
        description="echo karriere er nå ITxBERGEN. Vår leder har skrevet en liten tekst om hvorfor vi har endret navn, og hva vi har i vente fremover."
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <NewName />
          </div>
        </div>
      </main>
    </>
  );
}
