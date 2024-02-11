import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="mx-auto py-4 px-4 w-full max-w-7xl">
      <h2 className="font-semibold text-center mt-10  mb-10">
        Samarbeidspartner:
      </h2>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5"> */}
      {/* <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/colab/knowit-logo.svg"
            alt="Knowit"
            className="max-h-8 filter"
          />
        </div>

        {/* :PARTNER 2 -> All */}
      {/* <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/colab/marinit.svg"
            alt="Marin IT"
            className="max-h-6 filter "
          /> */}
      {/* </div>  */}

      {/* :PARTNER 2 -> All */}
      <div className="flex justify-center items-center">
        <Image
          width={1000}
          height={1000}
          src="/colab/spv.svg"
          alt="Sparebanken Vest"
          className="max-h-8 filter "
        />
      </div>
    </div>
    // </div>
  );
}
