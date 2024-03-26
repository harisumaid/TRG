import { AboutUs } from "@/interface/trg";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default async function About() {
  const aboutUsReq = await fetch("http://localhost:3000/api/about");
  const aboutUs: AboutUs = (await aboutUsReq.json()).data;

  return (
    <>
    <RevealOnScroll>
      <div id="AboutUs" className="h-screen w-full snap-center snap-always">
        <div className="w-full absolute text-sm sm:text-xl lg:text-3xl text-center font-extralight ">
          {aboutUs.attributes.aboutHeading}
        </div>
        <div className="h-full w-full flex justify-center sm:space-x-4 lg:space-x-12 sm:px-8 items-center flex-col sm:flex-row space-y-7 sm:space-y-0 px-8">
          <Image
            className="w-36 sm:w-52 h-36 sm:h-52 rounded-lg transition hover:scale-110 hover:shadow-lg ease-in-out duration-500"
            src={aboutUs.attributes.aboutImage}
            alt={"About us image"}
            width={500}
            height={500}
          />
          <div
            className="w-4/5 sm:w-3/5 lg:w-2/5 text-xs sm:text-sm lg:text-lg text-center"
            dangerouslySetInnerHTML={{
              __html: aboutUs.attributes.aboutDetails,
            }}
          ></div>
        </div>
      </div>
      </RevealOnScroll>
    </>
  );
}
