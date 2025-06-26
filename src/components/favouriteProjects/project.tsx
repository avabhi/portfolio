import React from "react";
import Image from "next/image";

interface IProjectProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

const PersonalProjects: React.FC<IProjectProps> = ({
  name,
  description,
  image,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="rounded-xl overflow-hidden shadow-lg h-[300px] relative transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        <Image
          src={image}
          className="object-cover h-full w-full"
          alt={`${name} image`}
          width={500}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-2 z-10">
          <h3 className="text-white text-xl font-bold drop-shadow-lg">
            {name}
          </h3>
          <p className="text-gray-200 text-sm line-clamp-2 drop-shadow-md">
            {description}
          </p>
        </div>
        <span className="absolute top-3 right-3 bg-white/80 text-gray-800 text-xs px-3 py-1 rounded-full shadow group-hover:bg-primary-500 group-hover:text-black transition-colors duration-300">
          View Project
        </span>
      </div>
    </a>
  );
};

export default PersonalProjects;
