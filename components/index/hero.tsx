import Link from "next/link";

export default function Hero() {
  return (
    <div className="animate-animationbg bg-gradient-to-r from-[#33030d] via-[#33030d] to-[#620619] bg-[#33030d] flex justify-center sm:w-full w-11/12 mx-auto mt-6 sm:mt-0 rounded sm:rounded-none md:mb-6">
      <div className="pb-16 pt-16 md:pb-24 mb:pt-24">
        <h1 className="text-[#cab169] font-extrabold text-4xl md:text-6xl pl-4 pr-4 md:w-9/12 md:pl-24 md:pr-24 ">
          Vi samler IT-studentene i Bergen
        </h1>
        <p className="text-white text-md text-sm  md:text-xl md:w-9/12 pl-4 pr-4 md:pl-24 md:pr-24">
          Karrieredagen for 2025 avholdes i Grieghallen 18. september 2025. Påmeldingen for bedrifter er nå åpen.
        </p>
        <br />
        <Link
          href="/for-bedrifter/pamelding"
          className="bg-[#cab169] text-[#33030d] text-sm md:text-lg font-semibold  px-4 py-2 ml-4 mr-4 mt-16 md:mt-6 md:ml-24 focus:outline-none focus:ring-4 rounded focus:ring-blue-400 hover:bg-white">
          Gå til påmelding{" "}
        </Link>
      </div>
    </div>
  );
}
