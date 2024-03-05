import { testimony } from "@/interface/trg";
import Image from "next/image";

export default function Testimony({
  id,
  stars = 5,
  clientName,
  clientTestimony,
  clientImage,
}: testimony) {
  const starsMap = new Array(stars).fill(undefined).map((v, i) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        key={`${clientName}_stars_${i}`}
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
    );
  });

  return (
    <>
      <div
        key={id}
        className="w-10/12 sm:w-2/5 lg:w-1/5 rounded-md shadow-xl bg-gradient-to-br from-slate-800 via-slate-800 to-slate-600 flex flex-col justify-center items-center gap-3 px-8 py-8 transition hover:scale-x-125 hover:scale-y-125 duration-500 ease-in"
      >
        <Image
          width={48}
          height={48}
          src={clientImage || "/profile-pic.svg"}
          className="w-12 h-12 rounded-full fill-white"
          alt={"profile pic"}
        />
        <div className="flex flex-row">{starsMap}</div>
        <div className="text-sm sm:text-lg lg:text-xl font-bold h-16 line-clamp-3 text-center">
          {clientName}
        </div>
        <div className="text-xs sm:text-sm lg:text-lg xl:text-xl font-light text-center line-clamp-4 hover:line-clamp-none">
          {" "}
          "{clientTestimony}"
        </div>
      </div>
    </>
  );
}
