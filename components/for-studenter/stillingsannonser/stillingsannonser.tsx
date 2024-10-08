import type { SanityDocument } from "@sanity/client";
import ReactSelect from "react-select";
import { useEffect, useState } from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../src/lib/sanity.client";
import "remixicon/fonts/remixicon.css";

export default function Joblist({
  joblistings,
}: {
  joblistings: SanityDocument[];
}) {
  // check if the user has dismissed the banner
  const [dismissed, setDismissed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dismissed") ?? "false");
    } catch {
      return false;
    }
  });

  function handleDismiss() {
    localStorage.setItem("dismissed", "true");
    setDismissed(true);
  }

  // Get a list of all unique companies
  const allCompanies = joblistings
    .map((job) => job.company)
    .filter(
      (company, index, companies) => companies.indexOf(company) === index
    );

  // if company is Sparebanken Vest, put it at the top
  allCompanies.sort((a, b) => {
    if (a === "Sparebanken Vest") return -1;
    if (b === "Sparebanken Vest") return 1;
    return a.localeCompare(b);
  });
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
      return JSON.parse(sessionStorage.getItem("selectedCompanies") ?? "[]");
    } catch {
      return [];
    }
  });
  const [selectedLocations, setSelectedLocations] = useState<string[]>(() => {
    try {
      return JSON.parse(sessionStorage.getItem("selectedLocations") ?? "[]");
    } catch {
      return [];
    }
  });
  const [selectedTypes, setSelectedTypes] = useState<string[]>(() => {
    try {
      return JSON.parse(sessionStorage.getItem("selectedTypes") ?? "[]");
    } catch {
      return [];
    }
  });

  // Define the state for the list of liked jobs
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") ?? "[]");
    } catch {
      return [];
    }
  });

  // Define the state for showing all jobs or only liked jobs
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    try {
      sessionStorage.setItem(
        "selectedCompanies",
        JSON.stringify(selectedCompanies)
      );
    } catch {}
  }, [selectedCompanies]);

  useEffect(() => {
    try {
      sessionStorage.setItem(
        "selectedLocations",
        JSON.stringify(selectedLocations)
      );
    } catch {}
  }, [selectedLocations]);

  useEffect(() => {
    try {
      sessionStorage.setItem("selectedTypes", JSON.stringify(selectedTypes));
    } catch {}
  }, [selectedTypes]);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  // Define a function to check if a job is liked
  function isFavorite(id: string) {
    return favorites.includes(id);
  }

  // Define a function to toggle the like status of a job
  function toggleFavorite(id: string) {
    if (isFavorite(id)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav !== id)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, id]);
    }
  }

  // create a builder for the image URL
  const builder = imageUrlBuilder(client);

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
            closeMenuOnSelect={false}
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
            closeMenuOnSelect={false}
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
            closeMenuOnSelect={false}
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

          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4 cursor-pointer w-full"
            onClick={() => setShowFavorites((prev) => !prev)}>
            {showFavorites ? (
              <>
                <i className="ri-heart-fill mr-2" />
                Vis alle stillinger
              </>
            ) : (
              <>
                <i className="ri-heart-fill mr-2 text-red-500" />
                Vis kun favoritter
              </>
            )}
          </button>

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
          <p className="mt-4">
            Antall resultater:{" "}
            {
              joblistings.filter((job) => {
                if (
                  selectedCompanies.length > 0 &&
                  !selectedCompanies.includes(job.company)
                ) {
                  return false;
                }
                if (
                  selectedLocations.length > 0 &&
                  !job.location.some((loc: string) =>
                    selectedLocations.includes(loc)
                  )
                ) {
                  return false;
                }
                if (
                  selectedTypes.length > 0 &&
                  !selectedTypes.includes(job.type)
                ) {
                  return false;
                }
                if (showFavorites && !isFavorite(job._id)) {
                  return false;
                }
                return true;
              }).length
            }
          </p>
        </div>
        <div className="col-span-2 md:ml-8 md:w-full">
          {joblistings
            .filter((job) => {
              // Filter by company
              if (
                selectedCompanies.length > 0 &&
                !selectedCompanies.includes(job.company)
              ) {
                return false;
              }
              // Filter by location
              if (
                selectedLocations.length > 0 &&
                !job.location.some((loc: string) =>
                  selectedLocations.includes(loc)
                )
              ) {
                return false;
              }
              // Filter by job type
              if (
                selectedTypes.length > 0 &&
                !selectedTypes.includes(job.type)
              ) {
                return false;
              }
              // Filter by favorites
              if (showFavorites && !isFavorite(job._id)) {
                return false;
              }
              return true;
            })
            .map((job) => (
              <div key={job._id} className="mb-4 w-full">
                <Link
                  href={`/for-studenter/stillingsannonser/${job.slug.current}`}>
                  <div className="border-2 py-4 px-4 my-5 hover:border-gray-400 rounded flex items-center">
                    <div className="w-1/5 flex justify-center">
                      <Image
                        className=" rounded"
                        src={builder
                          .image(job.logo)
                          .width(256)
                          .height(256)
                          .url()}
                        alt={job.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="w-4/5 ml-4">
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

                    <div className="favorite">
                      {isFavorite(job._id) ? <span>❤️</span> : null}
                    </div>
                  </div>
                </Link>
              </div>
            ))}

          {!dismissed && (
            <div className="border-2 py-4 px-4 my-5 bg-gray-200 rounded relative">
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                aria-label="Lukk banner og ikke vis igjen"
                onClick={handleDismiss}>
                <i className="ri-close-line text-xl" />
              </button>
              <div className="w-full m-2">
                <h3 className="text-xl font-bold mt-4 mb-1 text-gray-900">
                  Har du en stillingsannonse som du ønsker å legge ut?
                </h3>
                <p className="text-gray-700">
                  Vi tilbyr gratis annonsering av stillingsannonser på våre
                  nettsider. Klikk på knappen under for å publisere deres
                  stillingsannonse på denne siden.
                </p>
                <Link href="https://airtable.com/shrEXkOYcPiAG7cDP">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-4 cursor-pointer">
                    <i className="ri-add-line mr-2" />
                    Publiser stillingsannonse
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
