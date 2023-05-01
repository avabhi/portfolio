import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./rainbowHighlight";
import Image from "next/image";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center overflow-hidden gap-x-[16px] w-full px-4 ">
      {/* Text container */}

      <div className=" md:text-left w-[60%]">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h3>
              Experienced Web Developer with a demonstrated history of working
              in the information technology and services industry. Skilled in
              Web Development.
            </h3>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className="w-[40%]">
        <img src="/abhi.jpeg" alt="my-picture" />
      </div>
    </div>
  );
}
