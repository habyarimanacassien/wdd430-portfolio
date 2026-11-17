import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import { connection } from "next/server";
import { getProjects } from "@/lib/projects-db";

export const metadata: Metadata = {
  title: "Open Source Projects",
  description: "Open source projects by Cassien Habyarimana.",
};

export default async function OpenSourceProjects() {
  await connection(); // render per request, not once at build time
  const projects = await getProjects("opensource"); // query Postgres directly

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
