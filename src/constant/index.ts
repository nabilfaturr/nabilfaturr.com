import { CircleUserRound, Flame, Home, Pencil } from "lucide-react";

export const navigationLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: CircleUserRound,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Flame,
  },
];

export const badges = [
  "Student",
  "•",
  "20 y/o",
  "•",
  "Fullstack Developer",
  "•",
  "Tech Enthusiast",
];

export const selectedProjects: TSelectedProject[] = [
  {
    title: "Noteworthy",
    siteUrl: "/propz",
    liveUrl: "https://",
    githubUrl: "https://",
    shortDescription: `A Next.js note-taking platform with complete dashboard, robust folder organization, auto save functionality, and
    rich typography`,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Drizzle",
      "Turso",
      "Tiptap",
    ],
    image: "/cover.webp",
  },
  {
    title: "Propz",
    siteUrl: "/propz",
    liveUrl: "https://",
    githubUrl: "https://",
    shortDescription: `A MERN stack application connecting property buyers and sellers. Features include form and image uploads,
    JWT/bcrypt/Google OAuth authentication, and a search filter.`,
    techStack: ["React.js", "TypeScript", "Tailwind", "MongoDB", "Firebase", "Express.js"],
    image: "/cover.webp",
  },
  {
    title: "Eventz",
    siteUrl: "/eventz",
    liveUrl: "https://",
    githubUrl: "https://",
    shortDescription: "Fullstack web for create online event",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Cloudinary",
    ],
    image: "/cover.webp",
  },
];

export type TSelectedProject = {
  title: string;
  liveUrl: string;
  githubUrl: string;
  shortDescription: string;
  image: string;
  siteUrl: string;
  techStack: string[];
};

export const runningText = [
  {
    text: "stunning",
    color: "text-blue-500",
  },
  {
    text: "amazing",
    color: "text-yellow-500",
  },
  {
    text: "fantastic",
    color: "text-red-500",
  },
];

export const about = `I am a college student from indonesia, excited about creating web
solutions with both front-end and back-end skills, especially react,
nextjs and nodejs goodies.`;

const text = `I'm Nabil, a fullstack developer from Indonesia. I'm passionate about creating xxx websites`;
