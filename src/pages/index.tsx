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
      "Worked on complete backend infra and apis for Apllication named- Outskill",
    ],
  },
  {
    company: "Primathon",
    designation: "Software Development Engineer - 2",
    from: "10/2021",
    to: "06/2022",
    location: "Gurugram,India",
    tasks: [
      "Built E-learning platfrom web app using Next Js,Express,PostgreSQL",
      "Worked on products which has customizable components using React JS.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    designation: "System Engineer",
    from: "06/2019",
    to: "09/2021",
    location: "Banglore,India",
    tasks: [
      "Built components for a high-performance Ticketing Tool web app using React Js.",
      "Monitored and tested application performance to identify potential bottlenecks, develop solutions, and collaborate with the backend team on solution implementation",
    ],
  },
  {
    company: "Olcademy",
    designation: "Frontend Developer Intern",
    from: "07/2018",
    to: "09/2028",
    location: "",
    tasks: [
      "Creating User profile Dashboard with the help of HTML,CSS, Bootstrap.",
    ],
  },
];

export default function Home() {
  return (
    <ContainerBlock
      //@ts-ignore
      title="Abhinav Vishwakarma - Developer"
      // description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      <Hero />
      <FavouriteProjects />
      <Experience experienceData={experienceData} />
      <Contact />
      {/* <LatestCode /> */}
    </ContainerBlock>
  );
}
