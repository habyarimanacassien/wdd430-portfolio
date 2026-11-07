import ProjectList, { type Project } from "@/components/ProjectList";

// No metadata here on purpose: the home page uses the default title from layout.tsx.

const projects: Project[] = [
  {
    title: "Quiz Generator",
    description:
      "A TypeScript application that helps students test their knowledge of R programming concepts based on ICT Skills foundations. It features a console-based quiz system with multiple question categories, difficulty levels, and detailed performance analytics.",
    technologies: ["TypeScript", "Node.js", "npm", "Visual Studio Code"],
    link: "https://github.com/habyarimanacassien/QuizGenerator",
  },
  {
    title: "Weather Forecast App",
    description:
      "A web application that fetches and displays weather forecasts for selected cities worldwide using the OpenWeatherMap API.",
    technologies: ["JavaScript", "CSS", "HTML"],
    link: "https://github.com/habyarimanacassien/WEATHERFORECAST",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I&apos;m a statistician and data scientist learning full-stack
          development with Next.js and React. Here are some of my recent
          projects.
        </p>
      </section>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="mb-6 text-2xl font-semibold">
          Projects
        </h2>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
