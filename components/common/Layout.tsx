import Head from "next/head";
import Footer from "./footer";
import MainContent from "./maincontent";
import Navbar from "./navbar/navbar";
import SkipToContent from "./skiptocontent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="ITxBERGEN, ITxBergen, IT X BERGEN, ixb, IT, Karrieredag, Karrieredager, Karrieredagene, Bergen, itDagene, Bindeleddet, Student, Studenter, Bergen, echo, Cloud, Enter, Linjeforening, ITØK, Enigma, HVL, UiB, Høgskulen på Vestlandet, Universitetet i Bergen, IT-student, echo karriere, Echo Karriere, Echo karrieredag, IT Bergen"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="image" content="/webpageAssets/ITxBergen_image.png" />
        <meta name="og:image" content="/webpageAssets/ITxBergen_image.png" />
        <meta
          name="image"
          property="og:image"
          content="/webpageAssets/ITxBergen_image.png"
        />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta property="og:site_name" content="ITxBergen" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta name="robots" content="index, follow" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#33030d" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="ITxBergen" />
        <meta name="application-name" content="ITxBergen" />
        <meta name="msapplication-TileColor" content="#33030d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#33030d" />
      </Head>
      <SkipToContent />
      <Navbar />
      <MainContent />
      <div 
        // keep footer on bottom of page, but also visible without need to scroll on short pages
        style={{ minHeight: "calc(100vh - 675px)" }}
      >{children}</div>
      <Footer />
    </>
  );
}
