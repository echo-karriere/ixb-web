import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

const forcompanies = [
  {
    name: "For bedrifter",
    description: "Informasjon om ITxBERGEN for bedrifter",
    href: "/for-bedrifter",
    icon: IconOne,
  },
  {
    name: "Send inn stillingsannonse",
    description: "Bruk dette skjemaet for å sende inn en stillingsannonse",
    href: "https://airtable.com/shrEXkOYcPiAG7cDP",
    icon: IconThree,
  },
  {
    name: "Påmeding karrieredagene",
    description: "Meld dere på ventelisten til karrieredagene.",
    href: "/for-bedrifter/pamelding",
    icon: IconTwo,
  },
];



export default function ForCompanies() {
  return (
    // For studenter
    <div className="top-16 w-full max-w-sm px-1 sm:px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-black hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75`}>
              <span>For bedrifter</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel
                static
                focus
                className="absolute z-10 w-screen max-w-xs px-4 mt-3 left-[2rem] md:left-0 transform -translate-x-1/2 sm:px-0 ">
                {({ close }) => (
                  <span onClick={() => close()}>
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-8 bg-gray-50 p-7">
                        {forcompanies.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              {item.name === "Send inn stillingsannonse" ? (
                                <p className="text-sm font-medium text-black">
                                  {item.name}{" "}
                                  <i
                                    aria-label="Ekstern lenke."
                                    className="ri-external-link-fill"></i>
                                </p>
                              ) : (
                                <p className="text-sm font-medium text-black">
                                  {item.name}
                                </p>
                              )}
                              <p className="text-sm text-gray-700">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      {/* <div className="bg-gray-800 p-4">
                    <Link
                      href="/for-bedrifter/pamelding"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50">
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-100">
                          Påmeding karrieredagene{" "}
                        </span>
                      </span>
                      <span className="block text-sm text-gray-200">
                        Påmeldingen til karrieredagene 2023 er nå åpen.
                      </span>
                    </Link>
                  </div> */}
                    </div>
                  </span>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

//icons

function IconOne() {
  return <i className="ri-information-line ri-2x text-[#33030d]"></i>;
}

function IconTwo() {
  return <i className="ri-pencil-line ri-2x text-[#33030d]"></i>;
}


function IconThree() {
  return <i className="ri-suitcase-line ri-2x text-[#33030d]"></i>;
}
