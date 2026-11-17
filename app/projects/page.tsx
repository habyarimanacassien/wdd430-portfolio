import type { Metadata } from "next";
import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import { connection } from "next/server";
import { getProjects } from "@/lib/projects-db";

export const metadata: Metadata = {
  title: "Projects",
  description: "An overview of Cassien Habyarimana's open source and school projects.",
};

// Server Component: it can be async and await data before rendering.
export default async function ProjectsOverview() {
  await connection(); // render per request, not once at build time
  const projects = await getProjects(); // query Postgres directly
  const openSourceCount = projects.filter((p) => p.type === "opensource").length;
  const schoolCount = projects.filter((p) => p.type === "school").length;

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Projects Overview</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        My work is grouped into two categories. Pick one below or use the tabs
        above.
      </p>
      <ul className="mb-12 grid gap-4 md:grid-cols-2">
        <li>
          <Link
            href="/projects/opensource"
            className="block rounded border-l-4 border-blue-600 bg-gray-50 p-4 text-gray-900 hover:bg-blue-50"
          >
            <span className="mb-1 block text-xl font-bold">Open Source Projects</span>
            <span className="text-gray-700">{openSourceCount} public projects on GitHub.</span>
          </Link>
        </li>
        <li>
          <Link
            href="/projects/school"
            className="block rounded border-l-4 border-blue-600 bg-gray-50 p-4 text-gray-900 hover:bg-blue-50"
          >
            <span className="mb-1 block text-xl font-bold">School Projects</span>
            <span className="text-gray-700">{schoolCount} projects from my BYU coursework.</span>
          </Link>
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">All Projects</h2>
      <ProjectList projects={projects} />
    </>
  );
}
