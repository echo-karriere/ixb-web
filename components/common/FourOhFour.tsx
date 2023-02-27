import Image from "next/image";
import "remixicon/fonts/remixicon.css";

export default function FourOhFour() {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-6">
        <h1
          aria-label="Vi fant kanskje ikke siden du leter etter, Men vi fant denne GIFen av
          Rick Astley istedenfor."
          className="text-2xl md:text-4xl font-bold">
          Vi fant kanskje ikke siden du leter etter...
        </h1>
      </div>
      <Image
        aria-label="OBS! Trykker du på GIFen vil det begynne å spille musikk. Du kan trykke på GIFen igjen for å stoppe musikken, eller oppdatere siden for å stoppe musikken."
        unoptimized={true}
        src={"/webpageAssets/en-veldig-kul-gif.gif"}
        alt="En GIF av en veldig kul person."
        height={500}
        width={500}
        className="w-86 mx-auto"
        onClick={() => {
          const Audioplay = new Audio("/webpageAssets/kulsang.mp3");

          if (document.body.style.backgroundImage === "") {
            document.body.style.backgroundImage =
              "url('/webpageAssets/rainbow.webp')";

            Audioplay.load();
            Audioplay.play();

            document.body.style.backgroundSize = "cover";
            console.log(
              'Jeg fikk ikke lov av økonomiansvarlig til å bruke penger på rettighetene til "Never Gonna Give You Up", så jeg måtte bruke annen musikk istedet :('
            );

            document.body.style.fontFamily = "Comic Sans MS";
          } else {
            window.location.reload();
          }
        }}
      />
      <div
        aria-hidden="true"
        className="flex items-center justify-center px-4 py-6">
        <p>...Men vi fant denne GIFen av Rick Astley istedenfor.</p>
      </div>
      <div className="flex items-center justify-center px-4 py-6">
        <p className="text-center font-mono bg-black w-fit p-2 rounded-md text-green-500">
          Feilkode: 404
        </p>
      </div>
    </>
  );
}
