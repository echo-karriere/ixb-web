import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../src/lib/sanity.client";
import "remixicon/fonts/remixicon.css";

const builder = imageUrlBuilder(client);

export default function CommitteeMember({
  committeeMember,
}: {
  committeeMember: SanityDocument[];
}) {
  return (
    <>
      <div className=" py-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Møt våre styremedlemmer
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Her finner du våre styremedlemmer, sammen med e-post og LinkedIn
              for å komme i kontakt med dem.
            </p>
            <br />
            <small>
              <i className="ri-external-link-fill"></i> E-post og LinkedIn åpner
              i ny fane.
            </small>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2
   
            list-none
            
            ">
            {committeeMember.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-4">
                  <img
                    className="h-28 w-28 rounded-full"
                    src={builder
                      .image(person.profilePicture)
                      .width(400)
                      .height(400)
                      .url()}
                    // alt bilde av person.name
                    alt={`Bilde av ${person.name}`}
                  />
                  <div>
                    <h3 className="md:font-2xl font-semibold leading-7 -mt-2 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm -mt-4 font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                    <div className="flex flex-row pt-2 gap-x-4">
                      <a
                        aria-label={`Trykk her for å sende e-post til ${person.name}`}
                        href={`mailto:${person.email}`}
                        target="_blank">
                        <i className="ri-mail-line ri-lg text-gray-600"></i>
                      </a>

                      {person.linkedin && (
                        <a
                          aria-label={`Trykk her for å gå til ${person.name} sin LinkedIn-profil.`}
                          href={person.linkedin}
                          target="_blank">
                          <i className="ri-linkedin-fill ri-lg text-gray-600"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
