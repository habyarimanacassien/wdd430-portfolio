// A tiny in-memory "database". It stands in for a real one (Postgres, Prisma, ...)
// so the API routes can be swapped to real queries later without other changes.

export type ProjectType = "opensource" | "school";

export interface ProjectRecord {
  id: number;
  type: ProjectType;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: ProjectRecord[] = [
  {
    id: 1,
    type: "opensource",
    title: "Quiz Generator",
    description:
      "A console-based TypeScript quiz app for testing knowledge of R programming concepts, with question categories, difficulty levels, and performance analytics.",
    technologies: ["TypeScript", "Node.js", "npm"],
    link: "https://github.com/habyarimanacassien/QuizGenerator",
  },
  {
    id: 2,
    type: "opensource",
    title: "Weather Forecast App",
    description:
      "A web app that fetches and displays weather forecasts for cities worldwide using the OpenWeatherMap API.",
    technologies: ["JavaScript", "CSS", "HTML"],
    link: "https://github.com/habyarimanacassien/WEATHERFORECAST",
  },
  {
    id: 3,
    type: "school",
    title: "Next.js Portfolio",
    description:
      "This portfolio site, built for WDD 430. It uses the App Router with nested layouts, reusable components, and API routes.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export function isProjectType(value: string): value is ProjectType {
  return value === "opensource" || value === "school";
}

// Returns every project, or only those of one type when a type is given.
export function getProjects(type?: ProjectType): ProjectRecord[] {
  return type ? projects.filter((p) => p.type === type) : projects;
}

// Returns one project, or undefined when no project has that id.
export function getProjectById(id: number): ProjectRecord | undefined {
  return projects.find((p) => p.id === id);
}
