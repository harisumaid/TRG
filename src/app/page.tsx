"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Testimony from "@/components/Testimony";
import { Disclosure, DisclosureProps, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { testimony } from "./../interface/trg";
import Link from "next/link";

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
    <div className="flex flex-col font-semibold snap-y snap-mandatory bg-gray-800">
      {/* nav bar portions */}
      <div className="h-16 w-full md:hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="h-full w-full flex items-center justify-between px-6 z-10 shadow-lg">
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
                  {({ close }) => (
                    <div className="w-full bg-gray-700 relative flex flex-col px-8 rounded-b-md">
                      <Link
                        onClick={() => close()}
                        className="my-4 font-medium"
                        href={"#Home"}
                      >
                        Home
                      </Link>

                      <Link
                        onClick={() => close()}
                        className="my-4 sm:my-4 font-medium"
                        href={"#AboutUs"}
                      >
                        About
                      </Link>

                      <Link
                        onClick={() => close()}
                        className="my-4 font-medium"
                        href={"#Testimonials"}
                      >
                        Testimonials
                      </Link>

                      <Link
                        onClick={() => close()}
                        className="my-4 font-medium"
                        href={"#ShowCase"}
                      >
                        Work Showcase
                      </Link>
                      <Link
                        onClick={() => close()}
                        className="my-4 font-medium"
                        href={"#ContactUs"}
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
      <div className="hidden md:flex h-16 w-full justify-around items-center shadow-xl">
        <div className="flex-initial w-1/12"></div>
        <div className="mx-9 flex-initial w-1/4">
          <div>
            <b>TRG</b>
          </div>
        </div>
        <div className="flex-initial w-1/3"></div>
        <div className="flex flex-initial w-1/4 justify-between">
          <span className="mx-2">About</span>
          <span className="mx-2">Services</span>
          <span className="mx-2">Contact</span>
        </div>
        <div className="flex-initial w-1/12"></div>
      </div>
      {/* Home section */}
      <div
        id="Home"
        className="h-screen w-full flex flex-col justify-center items-center gap-10 snap-center snap-always"
      >
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
      {/* About us section */}
      <RevealOnScroll>
        <div id="AboutUs" className="h-screen w-full snap-center snap-always">
          <div className="w-full absolute text-sm sm:text-xl lg:text-3xl text-center font-extralight ">
            About Us
          </div>
          <div className="h-full w-full flex justify-center sm:space-x-4 lg:space-x-12 sm:px-8 items-center flex-col sm:flex-row space-y-7 sm:space-y-0 px-8">
            <Image
              className="w-36 sm:w-52 h-36 sm:h-52 rounded-lg transition hover:scale-110 hover:shadow-lg ease-in-out duration-500"
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
      {/* Testimonials section */}
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
              return <Testimony {...testimony} key={`testimony_${index}`} />;
            })}
          </div>
        </div>
      </RevealOnScroll>
      {/* Showcase section */}
      <RevealOnScroll>
        <div
          id="ShowCase"
          className="min-h-screen h-auto w-full snap-center snap-always flex flex-col justify-evenly"
        >
          <div className="text-sm sm:text-xl lg:text-3xl text-center font-extralight px-7 py-16">
            Discover our portfolio - a testament to our dedication, creativity,
            and expertise. See how we've transformed visions into reality for
            clients just like you.
          </div>
          <div className="flex justify-center items-center">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {new Array(6).fill(undefined).map((v, i) => {
                return (
                  <Image
                    src={`/showcase_${i + 1}.jpg`}
                    className="my-3 rounded-lg transition hover:scale-110 hover:shadow-lg duration-300 ease-in"
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
      {/* Contact us section */}
      <RevealOnScroll>
        <div id="ContactUs" className="h-fit w-full snap-center snap-always">
          <div className="h-fit px-8 py-8">
            <div className="h-fit flex flex-col sm:flex-row justify-around items-center bg-gradient-to-br from-slate-800 via-slate-800 to-slate-600 rounded-lg divide-y-2 sm:divide-y-0 divide-x-0 sm:divide-x-2 px-6 py-6 sm:py-16 shadow-2xl">
              <div className=" h-full px-6 py-7 basis-1/2 text-center flex flex-col grow justify-around items-center gap-4">
                <div className="text-lg sm:text-2xl lg:text-4xl font-extrabold">
                  Contact Us
                </div>
                <div className="text-sm sm:text-xl lg:text-2xl font-extralight">
                  Ready to elevate your brand? Reach out to us today and let's
                  start crafting your unique story together. Whether you're
                  ready to dive in or just have a question, we're here to help.
                  Get in touch and let's make something extraordinary happen.
                </div>
              </div>
              <div className="w-full  px-6 py-6 basis-1/2">
                <div className="grid grid-row-4 sm:grid-row-3">
                  <div className="grid row-span-2 sm:row-span-1 grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-0 sm:gap-2">
                    <input
                      className="h-12 w-full my-4 mx-2 px-2 rounded-sm text-black"
                      type="text"
                      placeholder="First Name"
                    />

                    <input
                      className="h-12 w-full my-4 mx-2 px-2 rounded-sm text-black"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>

                  <input
                    className="h-12 w-full my-4 mx-2 px-2 rounded-sm text-black"
                    type="email"
                    placeholder="Email"
                  />
                  <textarea
                    className="h-28 w-full my-4 mx-2 px-2 py-2 rounded-sm text-black resize-none"
                    placeholder="Message"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5">
            <div className="w-full h-fit bg-slate-900 flex flex-col text-[3vw] sm:text-[2vw] lg:text-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 grow mx-14 lg:mx-5">
                <div className="flex flex-col justify-center items-start lg:items-center text-center py-8">
                  <div className="my-4">THE ROYAL GRAPHIX.</div>
                  <div>
                    <span className="font-extrabold">Ph:</span>
                    <span className="font-extralight"> +91 7978455218</span>
                  </div>
                  <div>
                    <span className="font-extrabold">Email:</span>{" "}
                    <span className="font-extralight">
                      theroyalgraphix@rediffmail.com
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center mx-0 lg:mx-20">
                  <div className="my-2 lg:my-4 font-extrabold">Links.</div>
                  <div className="my-2 lg:my-4"></div>
                  <ul className="list-disc list-inside">
                    <li className="my-2 lg:my-4 font-extralight">
                      <Link href={"#Home"}>Home</Link>
                    </li>

                    <li className="my-2 lg:my-4 font-extralight">
                      <Link href={"#AboutUs"}>About</Link>
                    </li>

                    <li className="my-2 lg:my-4 font-extralight">
                      <Link href={"#Testimonials"}>Testimonials</Link>
                    </li>

                    <li className="my-2 lg:my-4 font-extralight">
                      <Link href={"#ShowCase"}>Work Showcase</Link>
                    </li>
                    <li className="my-2 lg:my-4 font-extralight">
                      <Link href={"#ContactUs"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-around items-start lg:items-center py-7">
                  <div className="font-extrabold">Lets connect with us on!</div>
                  <div>
                    <div className="h-full flex justify-center items-center gap-4 py-8">
                      {/* Google Maps */}
                      <a
                        target="_blank"
                        href="https://maps.app.goo.gl/mgcbM8AVtiBX4Xxz5"
                        className="h-fit inline-block bg-green-100 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-md"
                      >
                        <Image
                          height={24}
                          width={24}
                          src={"/google_maps.svg"}
                          className="h-6 w-6"
                          alt={"Facebook Icon"}
                        />
                      </a>

                      {/* Facebook */}
                      <a
                        href="#"
                        className="h-fit inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md"
                      >
                        <Image
                          height={24}
                          width={24}
                          src={"/facebook.svg"}
                          className="h-6 w-6"
                          alt={"Facebook Icon"}
                        />
                      </a>

                      {/* Instagram */}
                      <a
                        href="#"
                        className="h-fit inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md"
                      >
                        <Image
                          height={24}
                          width={24}
                          src={"/instagram.svg"}
                          className="h-6 w-6"
                          alt={"Facebook Icon"}
                        />
                      </a>

                      {/* X Account */}
                      <a
                        href="#"
                        className="h-fit inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
                      >
                        <Image
                          height={24}
                          width={24}
                          src={"/twitter.svg"}
                          className="h-6 w-6"
                          alt={"Facebook Icon"}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-fit text-center flex-shrink my-8 text-lg">
                © By The Royal Graphix.
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
