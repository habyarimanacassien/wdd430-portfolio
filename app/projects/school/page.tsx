import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import { fetchProjects } from "@/lib/fetch-projects";

export const metadata: Metadata = {
  title: "School Projects",
  description: "School projects by Cassien Habyarimana.",
};

export default async function SchoolProjects() {
  const projects = await fetchProjects("school"); // GET /api/projects?type=school

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">School Projects</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Projects I built as part of my coursework.
      </p>
      <ProjectList projects={projects} />
    </>
  );
}
