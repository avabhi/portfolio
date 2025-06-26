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
    <section className="bg-white dark:bg-gray-800 ">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-3xl md:text-6xl font-bold py-20 text-center md:text-left px-4 lg:px-0 text-gray-800 dark:text-gray-200">
          Experience
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-8 py-[2rem] px-4 lg:px-0">
          {/* Single card */}
          {experienceData ? (
            <div className="flex flex-col gap-y-8">
              {experienceData?.map((experience: experience, i) => {
                return (
                  <div
                    className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-blue-100 dark:border-gray-700 flex flex-col gap-y-4 transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl"
                    key={i}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h1 className="font-bold text-lg md:text-xl text-blue-700 dark:text-blue-300">
                        {experience.designation}
                      </h1>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold shadow">
                        {experience.from} - {experience.to}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h2 className="font-semibold text-md md:text-lg text-gray-700 dark:text-gray-200">
                        {experience.company}
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
                        {experience.location}
                      </span>
                    </div>
                    <p className="font-medium text-gray-800 dark:text-gray-100 mt-2 mb-1 text-sm">
                      Achievements/Tasks
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      {experience.tasks.map((task, i) => (
                        <li
                          key={i}
                          className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
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
