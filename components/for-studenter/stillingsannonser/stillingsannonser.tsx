import type { SanityDocument } from "@sanity/client";
import ReactSelect from "react-select";
import { useEffect, useState } from "react";
import Link from "next/dist/client/link";

export default function Joblist({
  joblistings,
}: {
  joblistings: SanityDocument[];
}) {
  // Get a list of all unique companies
  const allCompanies = joblistings
    .map((job) => job.company)
    .filter((company, index, companies) => companies.indexOf(company) === index)
    .sort();

  // Get a list of all unique locations
  const allLocations = joblistings
    .flatMap((job) => job.location)
    .filter(
      (location, index, locations) => locations.indexOf(location) === index
    )
    .sort();

  const allTypes = joblistings
    .map((job) => job.type)
    .filter((type, index, types) => types.indexOf(type) === index)
    .sort();

  // Define the state for the selected companies and locations
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("selectedCompanies") ?? "[]");
    } catch {
      return [];
    }
  });
  const [selectedLocations, setSelectedLocations] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("selectedLocations") ?? "[]");
    } catch {
      return [];
    }
  });
  const [selectedTypes, setSelectedTypes] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("selectedTypes") ?? "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "selectedCompanies",
        JSON.stringify(selectedCompanies)
      );
    } catch {}
  }, [selectedCompanies]);

  useEffect(() => {
    try {
      localStorage.setItem(
        "selectedLocations",
        JSON.stringify(selectedLocations)
      );
    } catch {}
  }, [selectedLocations]);

  useEffect(() => {
    try {
      localStorage.setItem("selectedTypes", JSON.stringify(selectedTypes));
    } catch {}
  }, [selectedTypes]);

  // Filter the job listings based on the selected companies and locations
  const filteredJobs = joblistings.filter(
    (job) =>
      (selectedCompanies.length === 0 ||
        selectedCompanies.includes(job.company)) &&
      (selectedLocations.length === 0 ||
        selectedLocations.some((location) =>
          job.location.includes(location)
        )) &&
      (selectedTypes.length === 0 ||
        selectedTypes.some((type) => job.type.includes(type)))
  );

  return (
    <>
      <div className="max-w-6xl w-11/12 mt-6 md:mt-10 mx-auto flex flex-col md:flex-row">
        <div className="col-span-1 md:w-96 flex-col-reverse">
          <label
            className="block text-gray-700 text-sm font-bold w-1 mb-2"
            htmlFor="company">
            Bedrift:
          </label>
          <ReactSelect
            placeholder="Filtrer etter bedrift"
            instanceId="company"
            isMulti
            noOptionsMessage={() => "Kunne ikke finne noen bedrifter"}
            options={allCompanies.map((company) => ({
              value: company,
              label: company,
            }))}
            value={selectedCompanies.map((company) => ({
              value: company,
              label: company,
            }))}
            onChange={(selected) =>
              setSelectedCompanies(
                selected ? selected.map((option) => option.value) : []
              )
            }
          />
          <label
            className="block text-gray-700 text-sm font-bold w-1 mt-4 mb-2"
            htmlFor="location">
            Sted:
          </label>
          <ReactSelect
            placeholder="Filtrer etter sted"
            instanceId="location"
            isMulti
            noOptionsMessage={() => "Kunne ikke finne noen steder"}
            options={allLocations.map((location) => ({
              value: location,
              label: location,
            }))}
            value={selectedLocations.map((location) => ({
              value: location,
              label: location,
            }))}
            onChange={(selected) =>
              setSelectedLocations(
                selected ? selected.map((option) => option.value) : []
              )
            }
          />
          <label
            className="block text-gray-700 text-sm font-bold w-1 mt-4 mb-2"
            htmlFor="type">
            Type:
          </label>
          <ReactSelect
            placeholder="Filtrer etter type"
            instanceId="type"
            isMulti
            noOptionsMessage={() => "Kunne ikke finne noen typer"}
            options={allTypes.map((type) => ({
              value: type,
              label: type,
            }))}
            value={selectedTypes.map((type) => ({
              value: type,
              label: type,
            }))}
            onChange={(selected) =>
              setSelectedTypes(
                selected ? selected.map((option) => option.value) : []
              )
            }
          />

          {selectedCompanies.length > 0 ||
          selectedLocations.length > 0 ||
          selectedTypes.length > 0 ? (
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4 cursor-pointer w-full"
              onClick={() => {
                setSelectedCompanies([]);
                setSelectedLocations([]);
                setSelectedTypes([]);
              }}>
              <i className="ri-refresh-line mr-2" />
              Nullstill filter
            </button>
          ) : null}
        </div>
        <div className="col-span-2 md:ml-8 md:w-full">
          {filteredJobs.map((job) => (
            <div key={job._id} className="mb-4 w-full">
              <Link
                href={`/for-studenter/stillingsannonser/${job.slug.current}`}>
                <div className="border-2 py-4 px-4 my-5 hover:border-gray-400 rounded">
                  <div className="w-full m-2 md:w-1/2">
                    <h3 className="text-xl font-bold -mt-2 mb-1 text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-gray-700">
                      {" "}
                      <i className="ri-building-3-line" /> {job.company}
                    </p>

                    <p className="text-gray-700">
                      <i className="ri-map-pin-line" />{" "}
                      {job.location.join(", ")}
                    </p>

                    <p className="text-gray-700">
                      <i className="ri-suitcase-line" /> {job.type}
                    </p>

                    {job.deadline && (
                      <p className="text-gray-700">
                        <i className="ri-calendar-line" />{" "}
                        {new Date(job.deadline).toLocaleDateString("nb-NO", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}

          <div className="border-2 py-4 px-4 my-5 bg-gray-200 rounded">
            <div className="w-full m-2">
              <h3 className="text-xl font-bold -mt-2 mb-1 text-gray-900">
                Har du en stilling som du ønsker å legge ut?
              </h3>
              <p className="text-gray-700">
                Vi tilbyr gratis annonsering av stillingsannonser på våre
                nettsider. Klikk på knappen under for å utlyse en stilling.
              </p>
              <Link href="https://airtable.com/shrEXkOYcPiAG7cDP">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-4 cursor-pointer">
                  <i className="ri-add-line mr-2" />
                  Utlys en stilling
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
