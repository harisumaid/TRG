"use client"

import { Disclosure, DisclosureProps, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


export default function Header() {
  return (
    <>
      <div className="h-16 w-full md:hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="h-full w-full flex items-center justify-between px-6 z-10 shadow-lg">
                <div>
                  <Link href="/">
                    <b>TRG</b>
                  </Link>
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
            <Link href="/">
              <b>TRG</b>
            </Link>
          </div>
        </div>
        <div className="flex-initial w-1/3"></div>
        <div className="flex flex-initial w-1/4 justify-between">
          <span className="mx-2">
            <Link href={"#AboutUs"}>About</Link>
          </span>
          <span className="mx-2">
            <Link href={"#ShowCase"}>Works</Link>
          </span>
          <span className="mx-2">
            <Link href={"#ContactUs"}>Contact Us</Link>
          </span>
        </div>
        <div className="flex-initial w-1/12"></div>
      </div>
    </>
  );
}
