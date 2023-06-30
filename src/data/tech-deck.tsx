import {
  SiAdobexd,
  SiAmazonaws,
  SiAntdesign,
  SiApollographql,
  SiAwsamplify,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiJira,
  SiKubernetes,
  SiMaterialdesign,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostcss,
  SiPrisma,
  SiReact,
  SiSass,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

export type ToolCategory =
  | "frontend"
  | "backend"
  | "styling"
  | "tooling"
  | "others";
export type ToolStatus = "checklist" | "learning" | "practicing" | "abandoned";

export type Tool = {
  name: string;
  featured?: boolean;
  icon: React.ReactNode;
  color?: string;
  category?: ToolCategory;
  status: ToolStatus;
  acquiredAt: Date;
  note?: string;
};

export const techDeck: Tool[] = [
  {
    name: "React",
    icon: <SiReact />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2018, 8 - 1),
    featured: true,
  },
  {
    name: "React Native",
    icon: <SiReact />,
    color: "#00000000",
    status: "abandoned",
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2020, 8 - 1),
    featured: true,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2019, 9 - 1),
    featured: true,
  },
  {
    name: "Github",
    icon: <SiGithub />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2018, 9 - 1),
    featured: true,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2021, 4 - 1),
    featured: true,
  },
  {
    name: "SASS",
    icon: <SiSass />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2019, 9 - 1),
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2020, 8 - 1),
    featured: true,
  },
  {
    name: "VueJS",
    icon: <SiVuedotjs />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2021, 8 - 1),
  },
  {
    name: "Nuxt.js",
    icon: <SiNuxtdotjs />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2021, 9 - 1),
  },
  {
    name: "PostCSS",
    icon: <SiPostcss />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2019, 9 - 1),
  },
  {
    name: "Material UI",
    icon: <SiMaterialdesign />,
    color: "#00000000",
    status: "abandoned",
    acquiredAt: new Date(2020, 11 - 1),
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2018, 9 - 1),
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#00000000",
    status: "abandoned",
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    name: "Apollo GraphQL",
    icon: <SiApollographql />,
    color: "#00000000",
    status: "abandoned",
    acquiredAt: new Date(2020, 11 - 1),
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2021, 4 - 1),
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2021, 11 - 1),
  },
  {
    name: "Strapi",
    icon: <SiStrapi />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2019, 6 - 1),
  },
  {
    name: "Jira",
    icon: <SiJira />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2020, 9 - 1),
  },
  {
    name: "Gitlab",
    icon: <SiGitlab />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2020, 9 - 1),
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2020, 11 - 1),
  },
  {
    name: "Adobe XD",
    icon: <SiAdobexd />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2018, 9 - 1),
  },
  {
    name: "AWS Amplify",
    icon: <SiAwsamplify />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2020, 12 - 1),
  },
  {
    name: "AWS",
    icon: <SiAmazonaws />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2020, 11 - 1),
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2020, 7 - 1),
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2022, 7 - 1),
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud />,
    color: "#00000000",
    status: "practicing",
    acquiredAt: new Date(2018, 8 - 1),
  },
];

export const featuredTech = techDeck.filter((tool) => tool.featured);
