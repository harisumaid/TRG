import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";
import TestimonySection from "@/components/Testimony/TestimonySection";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import About from "@/components/About";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <div className="flex flex-col font-semibold snap-y snap-mandatory bg-gray-800">
      {/* nav bar portions */}
      <Header />
      {/* Home section */}
      <HeroSection />
      {/* About us section */}
      <About />
      {/* Testimonials section */}
      <TestimonySection />
      {/* Showcase section */}
      <Showcase />

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
                <div className="flex flex-col justify-center  mx-0 lg:mx-20 my-6">
                  <div className="my-2 lg:my-4 font-extrabold">Links.</div>
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
