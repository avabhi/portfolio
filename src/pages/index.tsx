import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/containerBlock";
import FavouriteProjects from "../components/favouriteProjects";
// import LatestCode from "../components/LatestCode";
import Hero from "../components/hero/hero";
import Experience, { IExperience, experience } from "@/components/experience";
const inter = Inter({ subsets: ["latin"] });

const experienceData: experience[] = [
  {
    company: "GrowthSchool",
    designation: "Member of Technical Staff",
    from: "07/2022",
    to: "Present",
    location: "Banglore,India",
    tasks: [
      "Built CBC platform from End to End web app using NextJS,Express,PostgreSQL",
      "Worked on Live Simulation Experience of Webinar and also worked on PWA using Next JS,Express,PostgreSQL",
    ],
  },
  {
    company: "Primathon",
    designation: "Primathon Technology Ventures Pvt. Ltd.",
    from: "10/2021",
    to: "06/2022",
    location: "Gurugram,India",
    tasks: [
      "Built E-learning platfrom web app using Next Js,Express,PostgreSQL",
      "Worked on products which has customizable components using React JS.",
    ],
  },
];
export default function Home() {
  return (
    <ContainerBlock
      title="Abhinav Vishwakarma - Developer"
      // description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      <Hero />
      <FavouriteProjects />
      <Experience experienceData={experienceData} />
      {/* <LatestCode /> */}
    </ContainerBlock>
  );
}
