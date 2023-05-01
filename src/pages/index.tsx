import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/containerBlock";
import FavouriteProjects from "../components/favouriteProjects";
// import LatestCode from "../components/LatestCode";
import Hero from "../components/hero/hero";
import Experience from "@/components/experience";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContainerBlock
      title="Abhinav Vishwakarma - Developer"
      // description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      <Hero />
      <FavouriteProjects />
      <Experience />
      {/* <LatestCode /> */}
    </ContainerBlock>
  );
}
