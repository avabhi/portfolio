import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/containerBlock";
import FavouriteProjects from "../components/favouriteProjects";
// import LatestCode from "../components/LatestCode";
import Hero from "../components/hero/hero";
import Experience, { IExperience, experience } from "@/components/experience";
import Contact from "@/components/contact";
import { IEducation } from "@/components/education";
import { EXPERIENCE_DATA } from "@/constants/constants";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContainerBlock
      //@ts-ignore
      title="Abhinav Vishwakarma - Developer"
      // description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      <Hero />
      <Experience experienceData={EXPERIENCE_DATA} />
      <FavouriteProjects />

      <Contact />
      {/* <LatestCode /> */}
    </ContainerBlock>
  );
}
