import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./rainbowHighlight";
import Image from "next/image";
import Education, { IEducation } from "../education";
import { ABOUT_ME, SKILLS } from "@/constants/constants";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  const educationData: IEducation[] = [
    {
      schoolName: "Raj Kumar Goel Institute of Technology",
      courseName: "B.Tech",
      startYear: "2015",
      endYear: "2019",
      location: "Ghaziabd,U.P.",
    },
    // {
    //   schoolName: "Chacha Nehru Smarak Inter College",
    //   courseName: "XII (Senior Secondary)",
    //   startYear: "2012",
    //   endYear: "2014",
    //   location: "Kanpur,U.P.",
    // },
    // {
    //   schoolName: "Chacha Nehru Smarak Inter College",
    //   courseName: "X (Secondary)",
    //   startYear: "2010",
    //   endYear: "2012",
    //   location: "Kanpur,U.P.",
    // },
  ];
  return (
    <div className="max-w-6xl mx-auto flex gap-8 px-4 lg:px-0 py-6">
      {/* Text container */}
      <div className="flex flex-col gap-y-[12px]">
        {/* <RoughNotationGroup show={true}> */}
        {/* <RainbowHighlight color={colors[0]}> */}
        <h1 className=" text-3xl  lg:text-6xl font-bold text-gray-700 dark:text-gray-200">
          Developer.
        </h1>
        {/* </RainbowHighlight> */}
        {/* <RainbowHighlight color={colors[1]}> */}
        <h1 className="text-3xl  lg:text-6xl font-bold text-gray-700 dark:text-gray-200">
          Programmer.
        </h1>
        {/* </RainbowHighlight> */}
        {/* <RainbowHighlight color={colors[2]}> */}
        <h3>{ABOUT_ME}</h3>
        {/* </RainbowHighlight> */}
        {/* </RoughNotationGroup> */}
        <div className="flex flex-col gap-y-[16px]">
          <h1 className="font-[600] text-[24px]"> Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[12px] gap-x-[16px]">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-100 via-white to-blue-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-blue-700 dark:text-blue-200 font-semibold text-[16px] rounded-xl px-4 py-2 shadow border border-blue-200 dark:border-gray-700 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-[16px]">
          <div className="font-[600] text-[24px]"> Education</div>
          <Education educationData={educationData} />
        </div>
      </div>
    </div>
  );
}
