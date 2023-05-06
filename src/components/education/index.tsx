import React from "react";

export interface IEducation {
  courseName: string;
  schoolName: string;
  startYear: string;
  endYear: string;
  location: string;
}

export interface IEducationData {
  educationData: IEducation[];
}
const Education: React.FC<IEducationData> = ({ educationData }) => {
  return (
    <>
      {educationData.map((education: IEducation, i: number) => {
        return (
          <div
            className="bg-white text-black rounded-[6px] p-[24px] flex flex-col gap-y-[8px]"
            key={i}
          >
            <h1 className="font-[600] text-[18px]">{education.courseName}</h1>
            <h2 className="font-[500] text-[16px]">{education.schoolName}</h2>
            <div className="flex items-center justify-between">
              <p className="text-[#ADD8E6] text-[14px]">
                {education.startYear}-{education.endYear}
              </p>
              <p className="text-[#ADD8E6] text-[14px]">{education.location}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Education;
