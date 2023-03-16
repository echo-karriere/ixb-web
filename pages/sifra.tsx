import Sifra from "../components/sifra.mdx";
import { HeadSEO } from "../components/common/functions/HeadSEO";

export default function whistleblow() {
  return (
    <>
      <HeadSEO
        title="Opplevd noe ugreit? Si fra! | ITxBergen"
        description="Informasjon om hvordan du kan melde fra om uønsket oppførsel på våre arrangementer, eller andre kritikkverdige hendelser."
        canonical="/sifra"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Sifra />
          </div>
        </div>
      </main>
    </>
  );
}