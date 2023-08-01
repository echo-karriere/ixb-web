import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <footer className="mb-6 mt-12 ">
      <hr />

      <div className="flex justify-center">
        <div className="max-w-7xl w-11/12 mt-6 mb-6">
          <div className="mb-6">
            <Image
              className="mb-4 mt-2"
              src="/webpageAssets/itxbergen-text.svg"
              alt="IT X BERGEN Footer"
              width={175}
              height={25}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <h3 className="text-lg font-semibold">Informasjon</h3>
              <ul className="mt-4 space-y-4 footer">
                <li>
                  <Link
                    href="/for-studenter"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    For studenter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-bedrifter"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    For bedrifter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/om-oss"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Om oss
                  </Link>
                </li>

                <li>
                  <Link
                    href="/en"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    English
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold">Kontakt oss</h3>
              <ul className="mt-4 space-y-4 footer">
                <li>
                  <Link
                    href="/om-oss/styremedlemmer"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Styremedlemmer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/om-oss/kontakt-oss"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Kontakt oss
                  </Link>
                </li>
                <li>
                  <Link
                    href="/info/presse"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Presse
                  </Link>
                </li>
                <li>
                  <Link
                    href="/debug"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Opplevd noe ugreit? ⚠️
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold">Om nettstedet</h3>
              <ul className="mt-4 space-y-4 footer">
                <li>
                  <Link
                    href="/info/personvern"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Personvernerklæring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/info/pameldingsvilkar"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Salgs- og påmeldingsvilkår
                  </Link>
                </li>
                <li>
                  <Link
                    href="/info/tilgjengelighet"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Tilgjengelighet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/info/informasjonskapsler"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Informasjonskapsler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    Sidekart
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold">Sosiale medier</h3>
              <ul className="mt-4 space-y-4 footer">
                <li>
                  <a
                    href="https://www.linkedin.com/company/itxbergen"
                    target="_blank"
                    aria-label="LinkedIn, ekstern lenke"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    <i className="ri-linkedin-fill ri-lg"></i> LinkedIn{" "}
                    <i className="ri-external-link-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/itxbergen/"
                    target="_blank"
                    aria-label="Instagram, ekstern lenke"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    <i className="ri-instagram-line ri-lg"></i> Instagram{" "}
                    <i className="ri-external-link-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/itxbergen"
                    target="_blank"
                    aria-label="Facebook, ekstern lenke"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    <i className="ri-facebook-fill ri-lg"></i> Facebook{" "}
                    <i className="ri-external-link-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/echo-karriere/"
                    target="_blank"
                    aria-label="GitHub, ekstern lenke"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    <i className="ri-github-line ri-lg"></i> Github{" "}
                    <i className="ri-external-link-fill"></i>
                  </a>
                </li>
                <li>
                  <Link
                    href="/slack"
                    className="text-gray-600 hover:text-blue-600 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg p-2 focus:ring-blue-400">
                    <i className="ri-slack-fill ri-lg"></i> Slack{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <p className="flex justify-center text-gray-600 font-semibold">
            ITxBergen &copy; 2019 - {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <hr />

      <div className="flex justify-center font-semibold pb-1 pt-2">
        Powered by:
      </div>

      <div className="flex justify-center">
        <a
          href="https://vercel.com/?utm_source=echo-karriere&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg focus:ring-blue-400">
          <Image
            className="m-2 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
            src="/webpageAssets/vercel.svg"
            alt="Vercel"
            width={72}
            height={16}
          />
        </a>
        <a
          href="https://sanity.io"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:ring-offset-2 focus:outline-none focus:ring-2 focus:rounded-lg focus:ring-blue-400">
          <Image
            className="m-2"
            src="/webpageAssets/sanity.svg"
            alt="Sanity"
            width={72}
            height={16}
          />
        </a>
      </div>
    </footer>
  );
}
