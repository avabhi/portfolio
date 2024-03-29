import React from "react";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* Single card */}
          <a href="https://messenger-clone-avabhi.vercel.app/" target="_blank">
            <div className="rounded-[6px] h-[300px]  cursor-pointer relative">
              <img
                src="/messenger-clone.png"
                className="h-full  w-full rounded-[6px]"
              />
              <p className="absolute">Messenger-Clone</p>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=io.growthschool&hl=en-IN"
            target="_blank"
          >
            <div className="rounded-[6px] h-[300px]  cursor-pointer relative">
              <img
                src="/outskill.png"
                className="h-full  w-full rounded-[6px]"
              />
              <p className="absolute">Outskill Android App</p>
            </div>
          </a>
          <a
            href="https://exquisite-pithivier-21bc33.netlify.app/home"
            target="_blank"
          >
            <div className="rounded-[6px] h-[300px]  cursor-pointer relative">
              <img
                src="/your-tour.png"
                className="h-full  w-full rounded-[6px]"
              />
              <p className="absolute">Your Tour Web App</p>
            </div>
          </a>
          {/* <a href="https://hilarious-sawine-f31f15.netlify.app/">
            <div className="rounded-[6px] h-[300px]  cursor-pointer relative">
              <img
                src="/rock-paper.png"
                className="h-full  w-full rounded-[6px]"
              />
              <p className="absolute">Rock-Paper-Scissiors</p>
            </div>
          </a> */}

          {/* <div className="bg-white text-black rounded-[6px] h-[300px]">
            <a
              href="https://tailwindmasterkit.com"
              className="w-full block shadow-2xl"
            >
              Tailwind Master Kit 01
            </a>
          </div>
          <div className="bg-white text-black rounded-[6px] h-[300px]">
            <a
              href="https://tailwindmasterkit.com"
              className="w-full block shadow-2xl"
            >
              Tailwind Master Kit 01
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
