import EnglishPage from "../components/englishPage.mdx";
import { HeadSEO } from "../components/common/functions/HeadSEO";

export default function Custom404() {
  return (
    <>
      <HeadSEO
        title="ITxBERGEN - We organise career fairs for IT students in Bergen"
        description="ITxBERGEN (formerly known as echo karriere) is a student group that organises career fairs where IT students can get to know future employers, as well as get an insight into what the job market looks like for IT students in Bergen and Norway."
        canonical="/en"
      
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <EnglishPage />
          </div>
        </div>
      </main>
    </>
  );
}
