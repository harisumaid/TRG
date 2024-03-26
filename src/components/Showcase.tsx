import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { Showcase } from "@/interface/trg";

export default async function ShowcaseComponent() {
  const showcaseReq = await fetch("http://localhost:3000/api/showcase");
  const showcases: Showcase[] = (await showcaseReq.json()).data;

  return (
    <>
      <RevealOnScroll>
      <div
        id="ShowCase"
        className="min-h-screen h-auto w-full snap-center snap-always flex flex-col justify-evenly">
        <div className="text-sm sm:text-xl lg:text-3xl text-center font-extralight px-7 py-16">
          Discover our portfolio - a testament to our dedication, creativity,
          and expertise. See how we've transformed visions into reality for
          clients just like you.
        </div>
        <div className="flex justify-center items-center">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {showcases.map((v: Showcase, i) => {
              return (
                <Image
                  src={v.attributes.showcaseUrl}
                  className="my-3 rounded-lg transition hover:scale-110 hover:shadow-lg duration-300 ease-in"
                  width={250}
                  height={250}
                  alt={v.attributes.showcaseUrl}
                  key={v.id}
                ></Image>
              );
            })}
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </>
  );
}
