import React from "react";

export type experience = {
  designation: string;
  company: string;
  from: string;
  to: string;
  location: string;
  tasks: string[];
};

export interface IExperience {
  experienceData: experience[];
}

const Experience: React.FC<IExperience> = ({ experienceData }) => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-8 py-20 pb-40">
          {/* Single card */}

          {experienceData ? (
            <div className="flex flex-col gap-y-[24px]">
              {experienceData?.map((experience: experience, i) => {
                return (
                  <div
                    className="bg-white text-black rounded-[6px] p-[24px] flex flex-col gap-y-[8px]"
                    key={i}
                  >
                    <h1 className="font-[600] text-[18px]">
                      {experience.designation}
                    </h1>
                    <h2 className="font-[500] text-[16px]">
                      {experience.company}
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-[#ADD8E6] text-[14px]">
                        {experience.from}-{experience.to}
                      </p>
                      <p className="text-[#ADD8E6] text-[14px]">
                        {experience.location}
                      </p>
                    </div>
                    <p className="font-[400] text-[14px]">Achievements/Tasks</p>
                    {experience.tasks.map((task, i) => {
                      return <li key={i}>{task}</li>;
                    })}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Experience;
