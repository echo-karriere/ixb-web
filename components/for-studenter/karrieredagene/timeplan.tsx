import React, { useState } from "react";
import Link from "next/link";
import { timetableThursday } from "../../../data/timetableThursday1";
import { timetableFriday } from "../../../data/timetableFriday";

const Timeline = () => {
  const [selectedDay, setSelectedDay] = useState("Torsdag");

  const toggleDay = (day: React.SetStateAction<string>) => {
    setSelectedDay(day);
  };

  const renderTimelineItems = () => {
    if (selectedDay === "Fredag") {
      return timetableFriday.map((item, index) => (
        <div className="mb-6 w-full md:w-3/4" key={index}>
          <div className="text-gray-600">
            {item.starttime} - {item.endtime}
          </div>
          <div className="font-bold">{item.title}</div>
          <p>{item.description}</p>

          {item.url && (
            <Link
              // design a button with light border
              className=" bg-gray-200 border border-gray-600 hover:bg-gray-300 rounded-md px-2 py-1 mt-1 inline-block"
              href={item.url}
              rel="noopener noreferrer">
              Les mer
            </Link>
          )}
        </div>
      ));
    } else if (selectedDay === "Torsdag") {
      // Render Thursday data from the imported file
      return timetableThursday.map((item, index) => (
        <div className="mb-6 w-full md:w-3/4" key={index}>
          <div className="text-gray-600">
            {item.starttime} - {item.endtime}
          </div>
          <div className="font-bold">{item.title}</div>
          <p>{item.description}</p>

          {item.url && (
            <Link
              // design a button with light border
              className=" bg-gray-200 border border-gray-600 hover:bg-gray-300 rounded-md px-2 py-1 mt-1 inline-block"
              href={item.url}
              rel="noopener noreferrer">
              Les mer
            </Link>
          )}
        </div>
      ));
    } else {
      return null; // Handle other days as needed
    }
  };

  return (
    <div className="xl:w-1/2 w-11/12 p-4 mx-auto">
      <div className="flex justify-center items-center mb-4">
        <button
          className={`${
            selectedDay === "Torsdag"
              ? "bg-[#33030d] text-white"
              : "bg-gray-300 text-gray-600"
          } font-bold py-2 px-4 rounded-full mr-2`}
          onClick={() => toggleDay("Torsdag")}>
          Torsdag
        </button>
        <button
          className={`${
            selectedDay === "Fredag"
              ? "bg-[#33030d] text-white"
              : "bg-gray-300 text-gray-600"
          } font-bold py-2 px-4 rounded-full`}
          onClick={() => toggleDay("Fredag")}>
          Fredag
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Timeplan for {selectedDay}en
        </h2>
        {/* Add your timeline content here */}
        <div className="bg-gray-100 p-4 rounded-lg">
          {renderTimelineItems()}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
