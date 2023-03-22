import { ExternalLink } from "../common/functions/externalLink";

export default function Slack() {
  return (
    <>
      <h1>Slack</h1>
      <p>Velg din rolle for å fortsette til Slack:</p>
      <button
        onClick={() => {
          window.location.href = "https://itxbergen.slack.com/sso/google/start";
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 font-semibold rounded">
        Styremedlem
      </button>
      <br />
      <button
        onClick={() => {
          window.location.href = "/slack/linjeforening";
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 font-semibold rounded">
        Leder av linjeforening
      </button>
      <br />
      <button
        onClick={() => {
          window.location.href = "/slack/bedrift";
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 font-semibold rounded">
        Bedrift
      </button>
      <br />
      <br />
      <h2>Tips til medlemmer av Slack kanalen vår</h2>
      <p>
        Vi oppfordrer at alle medlemmene av Slack kanalen vår har installert
        Slack på alle enhetene sine. Dette vil gjøre det lettere å kommunisere
        med oss, og du vil få varsler på alle enhetene dine når det kommer nye
        meldinger.
        <br />
        <br />
        Sørg også for at varsler er aktivert på Slack, slik at du ikke går glipp
        av viktige meldinger.
      </p>
      <br />
      <ExternalLink
        href="https://slack.com/downloads/"
        linkText="Last ned Slack"
      />
      <br />
      <ExternalLink
        href="https://slack.com/help/categories/360000047906-Your-profile-preferences#adjust-your-notifications"
        linkText="Hjelp til varslinger på Slack"
      />
    </>
  );
}
