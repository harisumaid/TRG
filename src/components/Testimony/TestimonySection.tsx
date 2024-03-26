import { testimony } from "@/interface/trg";
import Testimony from "./Testimony";
import RevealOnScroll from "../RevealOnScroll";

export default async function TestimonySection() {
  const testimoniesReq = await fetch("http://localhost:3000/api/testimony");
  const testimonies: testimony[] = (await testimoniesReq.json())
    .data as testimony[];

  return (
    <>
      <RevealOnScroll>
        <div
          id="Testimonials"
          className="min-h-screen h-fit w-full snap-center snap-always flex flex-col justify-evenly"
        >
          <div className="text-sm sm:text-xl lg:text-3xl text-center font-extralight px-7 py-16">
            Here are the some testimony from our client
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-around gap-6 sm:px-12">
            {testimonies.map((testimony, index) => {
              return <Testimony {...testimony} key={testimony.id} />;
            })}
          </div>
        </div>
      </RevealOnScroll>
    </>
  );
}
