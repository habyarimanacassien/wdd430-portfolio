import { connection } from "next/server";
import ProjectList from "./ProjectList";
import { getProjects } from "@/lib/projects-db";

// Part 2: an async Server Component that fetches its own data. The school page
// wraps it in <Suspense>, so the heading shows at once and this list streams
// in when the database answers.
export default async function SchoolProjectList() {
  await connection(); // render per request, not once at build time

  const projects = await getProjects("school"); // query Postgres directly
  return <ProjectList projects={projects} />;
}
