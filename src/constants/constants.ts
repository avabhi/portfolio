import { experience } from "@/components/experience";

export const PROJECTS = [
  {
    id: 1,
    name: "Thaizzle",
    description:
      "A free online platform for new and used products. Advertise your products in categories such as real estate, cars, fashion, jewelry, amulets and many more. It is developed by using ReactJS, NodeJS, Firebase and boolean queries.",
    image: "/Thaizzle.png",
    link: "https://www.thaizzle.com/",
  },
  {
    id: 2,
    name: "Flick Learning App",
    description:
      "An Android app that provides a platform for users to learn and enhance their skills through various courses and resources. It is developed using Flutter, NodeJS, ExpressJS, PostgreSQL, Prisma ORM.",
    image: "/flick.png",
    link: "https://play.google.com/store/apps/details?id=io.growthschool&hl=en-IN",
  },
  {
    id: 3,
    name: "TourGPT",
    description:
      "Discover personalized travel recommendations, smart itineraries, and expert tips for destinations world-wide. Let AI simplify your journey and make every trip unforgettable!",
    image: "/tourgpt.png",
    link: "https://www.tourgpt.in/",
  },
];

export const EXPERIENCE_DATA: experience[] = [
  {
    company: "NTT Data",
    designation: "Industry Consulting Snr. Consultant",
    from: "07/2024",
    to: "Present",
    location: "Bangalore, India",
    tasks: [
      "Developed and implemented hero carousel on key pages including the homepage and mobile gallery using Next.js, resulting in a significant improvement in user acquisition.",
      "Refactored the Product Description Page (PDP) with progressive reveal UX enhancements, improving content accessibility and driving a 0.05% uplift in cart additions across millions of sessions.",
    ],
  },
  {
    company: "GrowthSchool",
    designation: "Member of Technical Staff",
    from: "07/2022",
    to: "07/2024",
    location: "Bangalore, India",
    tasks: [
      "Built an end-to-end LMS web platform using React, Next.js, Express, and PostgreSQL, now serving over 300k enrolled users.",
      "Streamlined Webinar web app using React, Next.js, Express, PostgreSQL enabling users to experience the live workshop experience and also optimized the app that lead to cost cutting by 25% per user activation.",
      "Developed and optimized the Outskill Android App backend using Express and PostgreSQL, Prisma ORM , resulting in improved performance and enhanced user experience.",
    ],
  },
  {
    company: "Primathon",
    designation: "Software Development Engineer - 2",
    from: "10/2021",
    to: "06/2022",
    location: "Gurugram, India",
    tasks: [
      "Built E-learning platfrom web app using Next.js,Express,PostgreSQL",
      "Worked on products which has customizable components using React JS.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    designation: "System Engineer",
    from: "06/2019",
    to: "09/2021",
    location: "Banglore, India",
    tasks: [
      "Ticketing Tool web app using React which serves more than 10M users.",
      "Monitored and tested application performance to identify potential bottlenecks, develop solutions, and collaborate with the backend team on solution implementation.",
    ],
  },
];

export const SKILLS = [
  "Javascript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Aws (intermediate)",
  "PostgresSQL",
  "MongoDB",
  "Docker",
  "Redis",
];

export const ABOUT_ME = `Full-stack developer with 6 years of hands-on experience in designing and building dynamic web applications by
integrating front-end and back-end technologies. Proven track record of delivering high-performance solutions with
a strong focus on user experience. Committed to collaborative development, team synergy, and driving successful
project outcomes.`;
