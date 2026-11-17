import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import { connection } from "next/server";
import { getProjects } from "@/lib/projects-db";

export const metadata: Metadata = {
  title: "School Projects",
  description: "School projects by Cassien Habyarimana.",
};

export default async function SchoolProjects() {
  await connection(); // render per request, not once at build time
  const projects = await getProjects("school"); // query Postgres directly

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
