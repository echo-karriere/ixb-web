import { Disclosure } from "@headlessui/react";
import ForStudents from "./navigation-buttons/for-students";
import ForCompanies from "./navigation-buttons/for-companies";
import AboutUs from "./navigation-buttons/about-us";
import Link from "next/link";
import Notification from "../../index/notification";

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-[#33030d] md:bg-transparent">
        <>
          <div className="mx-auto w-11/12 max-w-7xl">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    aria-label="Gå til forsiden"
                    className="rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 px-2 focus:ring-blue-400 md:hidden">
                    <img
                      className="block h-10 w-auto md:hidden"
                      src="/webpageAssets/itxbergen.svg"
                      alt="IT X BERGEN"
                    />
                  </Link>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    aria-label="Gå til forsiden"
                    className="rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 md:block">
                    <img
                      className="hidden h-10 md:block"
                      src="/webpageAssets/itxbergen.svg"
                      alt="IT X BERGEN"
                    />
                  </Link>
                </div>

                <div className="justify-center content-center hidden md:flex md:w-auto md:order-1">
                  <div>
                    <ForStudents />
                  </div>
                  <div>
                    <ForCompanies />
                  </div>
                  <div>
                    <AboutUs />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row bg-white space-x-0 text-left justify-center py-2 md:hidden">
            <div>
              <ForStudents />
            </div>
            <div>
              <ForCompanies />
            </div>
            <div>
              <AboutUs />
            </div>
          </div>

          <hr className="border-gray-200" />
        </>
      </Disclosure>
      {/* <Notification /> */}
    </>
  );
}
