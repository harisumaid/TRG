"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const heroText = "Get your thought and idea crafted at.";

  const companyName = "THE ROYAL GRAPHIX.";

  const [currCompName, setCurrCompName] = useState("");

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
    <>
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
    </>
  );
}
