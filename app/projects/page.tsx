import type { Metadata } from "next";
import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";

export const metadata: Metadata = {
  title: "Projects",
  description: "An overview of Cassien Habyarimana's open source and school projects.",
};

// Reading searchParams makes this page render on every request (dynamic),
// so `await connection()` is no longer needed here.
export default async function ProjectsOverview(props: PageProps<"/projects">) {
  const searchParams = await props.searchParams;

  // Never trust the URL: values can be missing, repeated (?query=a&query=b)
  // or nonsense (?page=abc). Accept only one string and whole numbers >= 1.
  const query = typeof searchParams.query === "string" ? searchParams.query : "";
  const requestedPage = Number(searchParams.page);

  const totalPages = await fetchProjectsPages(query);
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage >= 1
      ? Math.min(requestedPage, Math.max(totalPages, 1)) // ?page=99 -> last page
      : 1;
  const projects = await fetchFilteredProjects(query, currentPage);

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
            <span className="text-gray-700">Public projects on GitHub.</span>
          </Link>
        </li>
        <li>
          <Link
            href="/projects/school"
            className="block rounded border-l-4 border-blue-600 bg-gray-50 p-4 text-gray-900 hover:bg-blue-50"
          >
            <span className="mb-1 block text-xl font-bold">School Projects</span>
            <span className="text-gray-700">Projects from my BYU coursework.</span>
          </Link>
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">All Projects</h2>
      <ProjectSearch />

      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          No projects match &ldquo;{query}&rdquo;.
        </p>
      )}

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
