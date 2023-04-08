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
        className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
        Styremedlem
      </button>
      <br />
      <button
        onClick={() => {
          window.location.href = "/slack/linjeforening";
        }}
        className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
        Leder av linjeforening
      </button>
      <br />
      <button
        onClick={() => {
          window.location.href = "/slack/bedrift";
        }}
        className="bg-gray-700 text-white rounded shadow-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4  focus:ring-yellow-500">
        Bedrift
      </button>
    </>
  );
}
