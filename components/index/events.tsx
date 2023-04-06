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
            ? "border-red-700"
            : event.eventType === "Workshop"
            ? "border-blue-700"
            : event.eventType === "Arrangement"
            ? "border-green-700"
            : "border-gray-700"
        } p-4 m-4 bg-[#f2f2f2] hover:bg-gray-200 rounded`}
        key={event._id}>
        <h3 className="font-bold">{event.title}</h3>
        <p>
          <i className="ri-calendar-line mr-2" />
          {new Date(event.deadline).toLocaleDateString("nb-NO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>
          <i className="ri-map-pin-line mr-2" />
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
      <h2 className="text-2xl font-bold ml-4">Arrangementer</h2>
      <div className="flex flex-wrap">
        {events.map((event, index) => (
          <div key={event._id} className={`w-full md:w-1/3 `}>
            <Event event={event} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
