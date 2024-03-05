"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Testimony from "@/components/Testimony";
import { Disclosure, DisclosureProps, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { testimony } from "./../interface/trg";

export default function Home() {
  const heroText = "Get your thought and idea crafted at.";

  const companyName = "THE ROYAL GRAPHIX.";

  const [currCompName, setCurrCompName] = useState("");

  const testimonies: testimony[] = [
    {
      stars: 5,
      clientName: "Smith & Co.",
      clientTestimony:
        "With TRG, our brand soared to new heights. Professionalism, creativity, and results - they deliver it all!",
    },
    {
      stars: 5,
      clientName: "BrightStar Enterprises",
      clientTestimony:
        "Thanks to TRG, our signage and branding stand out in the crowd. Exceeded all expectations!",
    },
    {
      stars: 5,
      clientName: "Horizon Heights",
      clientTestimony:
        "Choosing TRG was a game-changer. They crafted experiences, not just signs!",
    },
    {
      stars: 5,
      clientName: "PrimePro Industries",
      clientTestimony:
        "Impressed by TRG's attention to detail. Our brand has never looked better!",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      // First write the royal graphics
      for (let i = 0; i < "THE ROYAL GRAPHICS".length; i++) {
        setTimeout(() => {
          setCurrCompName("THE ROYAL GRAPHICS".substring(0, i + 1));
        }, (i + 1) * 100);
      }

      // then remove 2 character and add X in place of that
      setTimeout(() => {
        setCurrCompName("THE ROYAL GRAPHIC");
      }, 1900 + 300);

      setTimeout(() => {
        setCurrCompName("THE ROYAL GRAPHI");
      }, 1900 + 600);

      setTimeout(() => {
        setCurrCompName("THE ROYAL GRAPHIX");
      }, 1900 + 1000);

      setTimeout(() => {
        setCurrCompName("THE ROYAL GRAPHIX.");
      }, 1900 + 1200);
    }, 3500);
  }, []);

  return (
    <div className="flex flex-col font-semibold snap-y snap-mandatory">
      {/* nav bar portions */}
      <div className="h-16 w-full md:hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="h-full w-full flex items-center justify-between px-6">
                <div>
                  <b>TRG</b>
                </div>
                <Disclosure.Button>
                  {open ? (
                    <ChevronDownIcon className="h-5 w-5" />
                  ) : (
                    <Bars3Icon className="h-5 w-5" />
                  )}
                </Disclosure.Button>
              </div>

              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform -translate-y-full"
                enterTo="transform translate-y-0"
                leave="transition-all duration-300 ease-out"
                leaveFrom="transform h-full"
                leaveTo="transform h-0"
              >
                <Disclosure.Panel>
                  <div className="w-full bg-red-500 px-6 relative">
                    <div>About</div>
                    <div>Services</div>
                    <div>Contact</div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
      <div className="hidden md:flex h-16 w-full border border-black justify-around items-center">
        <div className="flex-initial w-1/12"></div>
        <div className="mx-9 flex-initial w-1/4">
          <div>
            <b>TRG</b>
          </div>
        </div>
        <div className="flex-initial w-1/3"></div>
        <div className="flex flex-initial w-1/4 justify-between">
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
        <div className="flex-initial w-1/12"></div>
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-center gap-10 snap-center snap-always">
        <div className="w-11/12 md:w-4/5 text-center">
          {" "}
          {heroText.split(" ").map((word, index) => (
            <span
              key={index}
              className={`text-3xl md:text-6xl xl:text-7xl opacity-0 animate-make-visible`}
              style={{ animationDelay: index * 0.5 + "s" }}
            >
              {word + " "}
            </span>
          ))}
        </div>
        <div className="w-11/12 md:w-4/5 text-center text-3xl md:text-6xl xl:text-7xl">
          <span className={currCompName.length > 0 ? "hidden" : "opacity-0"}>
            {companyName}
          </span>
          <span>{currCompName}</span>
          <span
            className={
              currCompName.length > 0
                ? currCompName === companyName
                  ? "hidden"
                  : "animate-pulse"
                : "hidden"
            }
          >
            {" "}
            _
          </span>
        </div>
      </div>
      <RevealOnScroll>
        <div className="h-screen w-full snap-center snap-always">
          <div className="w-full absolute text-sm sm:text-xl lg:text-3xl text-center font-extralight ">
            About Us
          </div>
          <div className="h-full w-full flex justify-center sm:space-x-4 lg:space-x-12 sm:px-8 items-center flex-col sm:flex-row space-y-7 sm:space-y-0 px-8">
            <Image
              className="w-36 sm:w-52 h-36 sm:h-52 rounded-lg transition hover:scale-110 ease-in-out duration-500"
              src={"/about-us.jpg"}
              alt={"About us image"}
              width={500}
              height={500}
            />
            <div className="w-4/5 sm:w-3/5 lg:w-2/5 text-xs sm:text-sm lg:text-lg text-center">
              Creating eye-catching signs and powerful brands is what we do
              best. At <b>TRG</b>, we make your business stand out with
              unforgettable signage and branding that speaks to your audience.
              With us, it's simple: we make your message clear and your brand
              memorable. Welcome to effective advertising made easy.
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="h-screen w-full snap-center snap-always flex flex-col justify-evenly">
          <div className="text-sm sm:text-xl lg:text-3xl text-center font-extralight">
            Here are the some testimony from our client
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-around gap-6 sm:px-12">
            {testimonies.map((testimony, index) => {
              return <Testimony {...testimony} key={`testimony_${index}`} />;
            })}
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="min-h-screen h-auto w-full snap-center snap-always flex flex-col justify-evenly">
          <div className="text-sm sm:text-xl lg:text-3xl text-center font-extralight">
            Work Showcases
          </div>
          <div className="flex justify-center items-center">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {new Array(6).fill(undefined).map((v, i) => {
                return (
                  <Image
                    src={`/showcase_${i + 1}.jpg`}
                    className="my-3"
                    width={250}
                    height={250}
                    alt={`showcase_image_${i}`}
                  ></Image>
                );
              })}
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <div className="h-screen w-full snap-center snap-always">
        Location & Contact us
      </div>
    </div>
  );
}
