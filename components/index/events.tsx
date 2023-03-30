import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../src/lib/sanity.client";
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

const query = groq`*[_type == "event" && defined(slug.current)]{
  _id,
  title,
  deadline,
  eventType,
  location,
  }`;

export default function Events() {
  const [events, setEvents] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await client.fetch(query);
      result.sort(
        (
          a: { deadline: string | number | Date },
          b: { deadline: string | number | Date }
        ) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
      );
      setEvents(result);
    };
    fetchEvents();
  }, []);

  return (
    <>
      {/* Events on large screens */}
      <div className="hidden sm:flex flex-wrap max-w-7xl w-11/12 mx-auto">
        <h2 className="text-2xl font-bold ml-2">Arrangementer</h2>
        <div className="flex flex-row w-full">
          <div className="w-1/2">
            {events.map((event, index) => {
              if (index % 2 === 0) {
                return (
                  <div
                    className={`border-l-4 ${
                      event.eventType === "Karrieredag"
                        ? "border-red-700"
                        : event.eventType === "Workshop"
                        ? "border-blue-700"
                        : event.eventType === "Arrangement"
                        ? "border-green-700"
                        : "border-gray-700"
                    } p-4 m-4 bg-[#f2f2f2]`}
                    key={event._id}>
                    <h3 className="font-bold">{event.title}</h3>
                    <p key={event._id}>
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
                );
              }
            })}
          </div>
          <div className="w-1/2">
            {events.map((event, index) => {
              if (index % 2 === 1) {
                return (
                  <div
                    className={`border-l-4 ${
                      event.eventType === "Karrieredag"
                        ? "border-red-700"
                        : event.eventType === "Workshop"
                        ? "border-blue-700"
                        : event.eventType === "Arrangement"
                        ? "border-green-700"
                        : "border-gray-700"
                    } p-4 m-4 bg-[#f2f2f2]`}
                    key={event._id}>
                    <h3 className="font-bold">{event.title}</h3>
                    <p key={event._id}>
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
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* Events on small screens */}
      <div className="sm:hidden flex flex-col max-w-7xl w-11/12 mx-auto">
        <h2 className="text-2xl ml-4 font-bold">Arrangementer</h2>
        {events.map((event) => {
          return (
            <div
              className={` border-l-4 ${
                event.eventType === "Karrieredag"
                  ? "border-red-700"
                  : event.eventType === "Workshop"
                  ? "border-blue-700"
                  : event.eventType === "Arrangement"
                  ? "border-green-700"
                  : "border-gray-700"
              } p-4 m-4 bg-[#f2f2f2]  `}
              key={event._id}>
              <h3 className="font-bold">{event.title}</h3>
              <p key={event._id}>
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
          );
        })}
      </div>
    </>
  );
}
