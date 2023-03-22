import { ExternalLink } from "../common/functions/externalLink";

export default function Slack() {
  return (
    <>
      <h1>Slack for bedrifter</h1>
      <h2>Logg inn</h2>
      <p>
        Hvis bedriften du representerer benytter Slack Pro eller en høyere plan,
        så skal du ikke logge inn her. Du vil ha tilgang til kanalen via din
        bedrift sin Slack Workspace.
        <br />
        <br />
        Om bedriften din ikke har en Slack Workspace, kan du logge inn ved å
        trykke på knappen under.
      </p>
      <button
        onClick={() => {
          window.location.href = "https://itxbergen.slack.com/?no_sso=1";
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 font-semibold rounded">
        Logg inn
      </button>
      <br />

      <br />
      <h2>Har du ikke tilgang?</h2>
      <p>
        Hvis dere ikke har tilgang til Slack, kan dere be om tilgang ved å
        trykke på lenken under. Bedrifter som er kunder av Slack Pro eller en
        høyere plan, vil bli invitert via Slack Connect. Dere vil også kunne ha
        flere medlemmer i kanalen. Om bedriften ikke benytter Slack vil dere bli
        invitert i kanalen som gjester, og kun en person fra bedriften vil få
        tilgang.
      </p>
      <br />
      <ExternalLink
        href="mailto:kontakt@itxbergen.no?subject=Tilgang%20til%20Slack%20-%20Bedrift&body=Hei%0D%0A%0D%0AJeg%2Fvi%20%C3%B8nsker%20%C3%A5%20f%C3%A5%20tilgang%20til%20deres%20Slack%20kanal%20for%20bedrifter%20som%20deltar%20p%C3%A5%20karrieredagene%0D%0A%0D%0ANavn%3A%0D%0A%5BDitt%20navn%5D%0D%0A%0D%0ASend%20meg%20invitasjon%20til%3A%0D%0A%5BE-post%20hvor%20du%20vil%20motta%20invitasjon%20til%20Slack%20kanalen%5D%0D%0A%0D%0ABedrift%3A%0D%0A%5BHvilken%20bedrift%20representerer%20du%2Fdere%3F%5D%0D%0A%0D%0ABruker%20bedriften%20Slack%20(Betalende%20kunde)%3A%0D%0A%5BJa%2FNei%5D%0D%0A%0D%0A"
        linkText="Spør om tilgang"
      />
    </>
  );
}
