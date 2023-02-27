export default function LogoCloud() {
  return (
    <div className="mx-auto py-4 px-4 w-full max-w-7xl">
      <h2 className="font-semibold text-center  mb-10">
        Våre samarbeidspartnere
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5">
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center items-center">
          <img
            src="/colab/knowit.svg"
            alt="Knowit"
            className="max-h-8 filter grayscale"
          />
        </div>

        {/* :PARTNER 2 -> All */}
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center items-center">
          <img src="/colab/marinit.svg" alt="Marin IT" className="max-h-6 filter " />

        </div>

        {/* :PARTNER 2 -> All */}
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center items-center">
          <img src="/colab/spv.svg" alt="Sparebanken Vest" className="max-h-8 filter " />
        </div>
      </div>
    </div>
  );
}
