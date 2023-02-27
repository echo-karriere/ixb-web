export default function Hero() {
  return (
    <div className="animate-animationbg bg-gradient-to-r from-[#33030d] via-[#33030d] to-[#620619] bg-[#33030d] flex justify-center max-w-7xl md:w-11/12 mx-auto md:mt-6 md:rounded-md md:mb-6">
      <div className="pb-16 pt-16 md:pb-24 mb:pt-24">
        <h1 className="text-[#cab169] font-extrabold text-4xl md:text-6xl pl-4 pr-4 md:w-9/12 md:pl-24 md:pr-24 ">
          Vi arrangerer karrieredager for IT-studenter
        </h1>
        <p className="text-white text-md text-sm  md:text-xl md:w-9/12 pl-4 pr-4 md:pl-24 md:pr-24">
          Neste karrieredagene arrangeres 14. og 15. september 2023 i
          Grieghallen. Påmeldingen for bedrifter er nå åpen!
        </p>
        <br />
        <a
          href="https://forms.echokarriere.no/karrieredagene2023"
          className="bg-[#cab169] text-[#33030d] text-sm md:text-lg font-semibold  px-4 py-2 ml-4 mr-4 mt-16 md:mt-6 md:ml-24 focus:outline-none focus:ring-4 rounded-md focus:ring-blue-400 hover:bg-white">
          Meld deg på som bedrift{" "}
        </a>
      </div>
    </div>
  );
}
