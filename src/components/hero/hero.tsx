import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./rainbowHighlight";
import Image from "next/image";
import Education, { IEducation } from "../education";

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
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-6">
      {/* Text container */}
      <div className="flex flex-col gap-y-[12px]">
        {/* <RoughNotationGroup show={true}> */}
        {/* <RainbowHighlight color={colors[0]}> */}
        <h1 className=" text-3xl  lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Developer.
        </h1>
        {/* </RainbowHighlight> */}
        {/* <RainbowHighlight color={colors[1]}> */}
        <h1 className="text-3xl  lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Programmer.
        </h1>
        {/* </RainbowHighlight> */}
        {/* <RainbowHighlight color={colors[2]}> */}
        <h3>
          As a full-stack developer with four years of experience, I have a
          comprehensive understanding of both front-end and back-end
          technologies. I have successfully designed and implemented robust
          applications, optimised database performance, and created responsive
          user interfaces.
        </h3>
        {/* </RainbowHighlight> */}
        {/* </RoughNotationGroup> */}
        <div className="flex flex-col gap-y-[16px]">
          <h1 className="font-[600] text-[24px]"> Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-[12px] gap-x-[16px]">
            <div className="bg-[grey] text-[16px] rounded-[12px] p-[6px] text-center">
              Javascript
            </div>
            <p className="bg-[grey] text-[16px] rounded-[12px] p-[6px] text-center">
              React JS
            </p>
            <p className="bg-[grey] text-[16px] rounded-[12px] p-[6px] text-center">
              NextJs
            </p>
            <p className="bg-[grey] text-[16px] rounded-[12px] p-[6px] text-center">
              Express
            </p>
            <p className="bg-[grey] text-[16px] rounded-[12px] p-[6px] text-center">
              Aws (intermediate)
            </p>
            <p className="bg-[grey] text-[16px] rounded-[12px] p-[6px] text-center">
              PostgresSQl
            </p>
            <p className="bg-[grey] text-[16px] rounded-[12px] p-[6px] text-center">
              Redis
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[16px]">
          <div className="font-[600] text-[24px]"> Education</div>
          <Education educationData={educationData} />
        </div>
      </div>
      <div className="">
        <img
          src="/abhi.jpeg"
          alt="my-picture"
          className="rounded-[12px] max-h-[700px]  w-full object-cover"
        />
      </div>
    </div>
  );
}
