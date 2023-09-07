import Link from "next/link";

export default function Hero() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <Link
        className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
        href="/for-studenter/karrieredagene/timeplan">
        <i className="ri-time-line mr-2"></i> Timeplan
      </Link>
      <Link
        className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
        href="/for-studenter/karrieredagene/standkart">
        <i className="ri-map-pin-2-line mr-2"></i> Standkart
      </Link>
      <Link
        className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
        href="/arrangement/workshops">
        <i className="ri-group-line mr-2"></i> Workshops
      </Link>
      <Link
        className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
        href="/arrangement/konseptpresentasjoner">
        <i className="ri-presentation-line"></i> Konseptpresentasjoner
      </Link>
      <Link
        className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
        href="/arrangement/lunsjseminar-knowit--sparebanken-vest">
        <i className="ri-cake-3-line"></i> Lunsjseminar
      </Link>
      <Link
        className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
        href="/for-studenter/stillingsannonser">
        <i className="ri-suitcase-line"></i> Stillingsannonser
      </Link>
    </div>
  );
}
