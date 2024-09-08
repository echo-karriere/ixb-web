import Link from "next/link";

const buttons = [
  {
    href: "/arrangement/workshops",
    text: "Workshops",
    icon: "ri-group-line",
  },
  {
    href: "/arrangement/konseptpresentasjoner",
    text: "Konseptpresentasjoner",
    icon: "ri-presentation-line",
  },
  {
    href: "/for-studenter/stillingsannonser",
    text: "Stillingsannonser",
    icon: "ri-suitcase-line",
  },
  {
    href: "/for-studenter/karrieredagene/english",
    text: "English",
    icon: "ri-global-line",
  },
];

export default function Shortcuts() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {buttons.map((button, index) => (
        <Link
          className="flex-shrink-0 bg-gray-700 text-white rounded shadow-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500"
          key={index}
          href={button.href}>
          <i className={button.icon}></i> {button.text}
        </Link>
      ))}
    </div>
  );
}
