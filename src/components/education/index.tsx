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
    <div className="w-full grid grid-cols-1 gap-8">
      {educationData.map((education: IEducation, i: number) => {
        return (
          <div
            className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-gray-700 flex flex-col gap-y-4 transition-colors duration-300 w-full"
            key={i}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-bold text-lg md:text-xl text-blue-700 dark:text-blue-300">
                {education.courseName}
              </h1>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold shadow">
                {education.startYear} - {education.endYear}
              </span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-semibold text-md md:text-lg text-gray-700 dark:text-gray-200">
                {education.schoolName}
              </h2>
              <span className="flex items-center gap-1 text-blue-500 dark:text-blue-300 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {education.location}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
