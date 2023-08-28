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
        <h3 className="font-bold truncate ">{event.title}</h3>
        <p className="truncate">
          <i className="ri-calendar-line mr-1" />
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
          <i className="ri-map-pin-line mr-1" />
          {event.location}
        </p>
        <p>
          <i aria-label="Organiseres av:" className="ri-building-3-line" />{" "}
          {event.organizer}
        </p>

        <p>
          <i
            aria-label="Arrangementstype:"
            className={`ri-record-circle-fill ${
              event.eventType === "Annet"
                ? "text-[#648fff]"
                : event.eventType === "Workshop"
                ? "text-[#fe6100]"
                : event.eventType === "Karrieredag"
                ? "text-[#ffb000]"
                : event.eventType === "Konseptpresentasjon"
                ? "text-[#785ef0]"
                : event.eventType === "Arrangement"
                ? "text-[#dc267f]"
                : ""
            }`}
          />{" "}
          {event.eventType}
        </p>
      </div>
    </Link>
  );
}

export default function Events({ events }: { events: SanityDocument[] }) {
  if (events.length === 0) {
    return (
      <div className="max-w-7xl w-11/12 mx-auto pt-6">
        <p className="text-gray-500 ml-4">Ingen arrangementer å vise 🙁</p>
      </div>
    );
  }
  return (
    <div className="max-w-7xl w-11/12 mx-auto pt-6">
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
