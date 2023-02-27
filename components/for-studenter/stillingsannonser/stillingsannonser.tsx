import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import ReactSelect from "react-select";
import { useState } from "react";

export default function Joblist2({
  joblisting,
}: {
  joblisting: SanityDocument[];
}) {
  // Get a list of all unique companies
  const allCompanies = joblisting
    .map((job) => job.company)
    .filter((company, index, companies) => companies.indexOf(company) === index)
    .sort();

  // Get a list of all unique locations
  const allLocations = joblisting
    .flatMap((job) => job.location)
    .filter(
      (location, index, locations) => locations.indexOf(location) === index
    )
    .sort();

  const allTypes = joblisting
    .map((job) => job.type)
    .filter((type, index, types) => types.indexOf(type) === index)
    .sort();

  // Define the state for the selected companies and locations
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Filter the job listings based on the selected companies and locations
  const filteredJobs = joblisting.filter(
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
            onChange={(selected) =>
              setSelectedTypes(
                selected ? selected.map((option) => option.value) : []
              )
            }
          />
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
        </div>
      </div>
    </>
  );
}
