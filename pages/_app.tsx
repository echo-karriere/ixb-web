import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <noscript>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            background: "white",
            padding: "1rem",
          }}>
          <img
            src="/webpageAssets/itxbergen.svg"
            alt="ITxBergen logo"
            style={{
              width: "auto",
              height: "2rem",
            }}
          />
          <h1 style={{ fontSize: "2rem" }}>
            Denne nettsiden krever JavaScript for å fungere.
          </h1>
          <p>
            Vennligst aktiver JavaScript i nettleseren din for å fortsette til
            nettsiden. Hvis du ikke vet hvordan du gjør dette, kan du finne
            veiledning{" "}
            <a
              href="https://www.enablejavascript.io/no"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}>
              her (ekstern lenke)
            </a>
            .
          </p>
          <p>
            Har du ikke lyst til å aktivere JavaScript, men er likevel
            interessert i å se hva vi driver med, kan du ta en titt på{" "}
            <a href="/about-us.txt" style={{ color: "blue" }}>
              denne siden
            </a>
          </p>
        </div>
      </noscript>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
