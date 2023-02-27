export default function Notification() {
  return (
    <div className="bg-gradient-to-r bg-yellow-500 flex justify-left max-w-7xl md:rounded-md md:w-11/12 mx-auto px-6 py-4 mb-4 mb:mt-6 ">
      <p className="text-lg">
        echo karriere har byttet navn, og vil fra 1. mars være kjent om
        ITxBergen.{" "}
        <a href="/nytt-navn" className="underline rounded-lg">
          {" "}
          Du kan lese mer om navnbytte her
        </a>
        .
      </p>
    </div>
  );
}
