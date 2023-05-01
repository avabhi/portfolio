import React from "react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gapp-y-8 py-20 pb-40">
          {/* Single card */}

          <div className="bg-white text-black rounded-[6px] h-[300px]">
            <a
              href="https://tailwindmasterkit.com"
              className="w-full block shadow-2xl"
            >
              Tailwind Master Kit 01
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
