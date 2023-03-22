import { HeadSEO } from "../../components/common/functions/HeadSEO";
import SlackIndex from "../../components/slack/index";

export default function Slack() {
  return (
    <>
      <HeadSEO
        title="Slack | ITxBergen"
        description="Slack er en chat-app som vi bruker til å kommunisere internt i ITxBergen. Her kan styremedlemmer, bedrifter og lederne av IT-linjeforeningene i Bergen kommunisere seg mellom."
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            <SlackIndex />
          </div>
        </div>
      </main>
    </>
  );
}
