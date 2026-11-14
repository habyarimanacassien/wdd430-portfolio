import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import { fetchProjects } from "@/lib/fetch-projects";

export const metadata: Metadata = {
  title: "Open Source Projects",
  description: "Open source projects by Cassien Habyarimana.",
};

export default async function OpenSourceProjects() {
  const projects = await fetchProjects("opensource"); // GET /api/projects?type=opensource

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Open Source Projects</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Projects whose source code is public on GitHub.
      </p>
      <ProjectList projects={projects} />
    </>
  );
}
