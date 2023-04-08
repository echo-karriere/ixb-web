import { ExternalLink } from "../common/functions/externalLink";

export default function Slack() {
  return (
    <>
      <h1>Slack for ledere av IT-linjeforeninger i Bergen</h1>
      <p>
        Er du leder av en linjeforening for IT i Bergen? Vi har en slack kanal
        for deg hvor du enkelt kan kommunisere med oss.
      </p>
      <button
        onClick={() => {
          window.location.href = "https://itxbergen.slack.com/?no_sso=1";
        }}
        className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
        Logg inn
      </button>
      <br />

      <br />
      <h2>Har du ikke tilgang?</h2>
      <p>
        Hvis du ikke har tilgang til Slack kanalen, da må du kontakte oss for å
        få en invitasjon. Det kan du gjøre ved å trykke på lenken under.
      </p>
      <br />
      <ExternalLink
        href="mailto:kontakt@itxbergen.no?subject=Tilgang%20til%20Slack%20-%20Leder%20av%20linjeforening&body=Hei%0D%0A%0D%0AJeg%20%C3%B8nsker%20%C3%A5%20f%C3%A5%20tilgang%20til%20deres%20Slack%20kanal%20for%20ledere%20av%20IT-linjeforeningene%20i%20Bergen%0D%0A%0D%0ANavn%3A%0D%0A%5BDitt%20navn%5D%0D%0A%0D%0ASend%20meg%20invitasjon%20til%3A%0D%0A%5BE-post%20hvor%20du%20vil%20motta%20invitasjon%20til%20Slack%20kanalen%5D%0D%0A%0D%0ALinjeforening%3A%0D%0A%5BHvilken%20linjeforening%20er%20du%20medlem%20av%3F%5D%0D%0A%0D%0A"
        linkText="Spør om tilgang"
      />
    </>
  );
}
