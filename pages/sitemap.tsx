
import { HeadSEO } from "../components/common/functions/HeadSEO";
import Sidekart from "../components/sidekart.mdx";

export default function Sitemap() {
  return (
    <>
      <HeadSEO
        title="Sidekart | ITxBERGEN"
        description="Sidekart over ITxBERGEN sine sider"
        canonical="/sitemap"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <Sidekart />
          </div>
        </div>
      </main>
    </>
  );
}
