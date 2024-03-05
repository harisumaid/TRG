"use client";

import { Disclosure, DisclosureProps, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { ReactElement, ReactNode } from "react";

export default function Home() {
  return (
    <div className="flex flex-col font-semibold">
      {/* nav bar portions */}
      <div className="h-16 w-full md:hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="h-full w-full flex items-center justify-between px-6">
                <div>ICON</div>
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
          <div>ICON</div>
        </div>
        <div className="flex-initial w-1/3"></div>
        <div className="flex flex-initial w-1/4 justify-between">
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
        <div className="flex-initial w-1/12"></div>
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-center gap-10">
        <div className="w-11/12 md:w-4/5 text-center text-3xl md:text-6xl xl:text-9xl">Get your thought and idea crafted at.</div>
        <div className="w-11/12 md:w-4/5 text-center text-3xl md:text-6xl xl:text-9xl">THE ROYAL GRAPHIX</div>
      </div>
      <div className="h-screen w-full ">About us</div>
      <div className="h-screen w-full ">Client Testimony</div>
      <div className="h-screen w-full ">Work Showcase</div>
      <div className="h-screen w-full ">Location & Contact us</div>
    </div>
  );
}
