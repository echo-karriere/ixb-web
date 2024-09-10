import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

type EventProps = {
  event: SanityDocument;
  index: number;
};

function Event({ event, index }: EventProps) {
  return (
    <Link href={`/arrangement/${event.slug.current}`} passHref>
      <div
        className={`border-t-4 ${
          event.eventType === "Karrieredag"
            ? "border-[#ffb000]"
            : event.eventType === "Workshop"
            ? "border-[#fe6100]"
            : event.eventType === "Konseptpresentasjon"
            ? "border-[#785ef0]"
            : event.eventType === "Arrangement"
            ? "border-[#dc267f]"
            : "border-[#648fff]"
        } p-4 m-4 bg-[#f2f2f2] hover:bg-gray-200 rounded`}
        key={event._id}>
        <div className="flex flex-col justify-between h-full">
          <h3 className="font-bold truncate">{event.title}</h3>
        </div>

        <p className="truncate">
          <i className="ri-calendar-line mr-2" />
          {new Date(event.starttime).toLocaleDateString("nb-NO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}

          {event.starttime && (
            <span>
              {" "}
              {new Date(event.starttime).toLocaleTimeString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          )}
        </p>
        <p className="truncate">
          <i className="ri-map-pin-line mr-2 " />
          {event.location}
        </p>
      </div>
    </Link>
  );
}

export default function Events({ events }: { events: SanityDocument[] }) {
  if (events.length === 0) {
    return (
      <div className="max-w-7xl w-11/12 mx-auto pt-6">
        <h2 className="text-2xl font-bold ml-4">Arrangementer</h2>
        <p className="text-gray-500 ml-4">Ingen arrangementer å vise 🙁</p>
      </div>
    );
  }
  return (
    <div className="max-w-7xl w-11/12 mx-auto pt-6">
      <h2 className="text-2xl font-bold ml-4">Timeplan for karrieredagen</h2>
      <div className="flex flex-wrap">
        {events.slice(0, 6).map((event, index) => (
          <div key={event._id} className={`w-full md:w-1/3 `}>
            <Event event={event} index={index} />
          </div>
        ))}

        {events.length > 6 && (
          // create a show more button center bellow
          <div className="w-full flex justify-center ">
            <Link href="/arrangement" passHref>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none focus:ring-4 focus:ring-yellow-400">
                Vis hele timeplanen
                <i className="ri-arrow-right-line ml-1" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
