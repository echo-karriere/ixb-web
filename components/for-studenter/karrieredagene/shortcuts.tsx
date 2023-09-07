import Link from "next/link";

const buttons = [
  {
    href: "/for-studenter/karrieredagene/timeplan",
    text: "Timeplan",
    icon: "ri-time-line mr-2",
  },
  {
    href: "/arrangement/workshops",
    text: "Workshops",
    icon: "ri-group-line mr-2",
  },
  {
    href: "/arrangement/konseptpresentasjoner",
    text: "Konseptpresentasjoner",
    icon: "ri-presentation-line",
  },
  {
    href: "/arrangement/lunsjseminar",
    text: "Lunsjseminar",
    icon: "ri-cake-3-line",
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
