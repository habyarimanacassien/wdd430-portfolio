import { connection } from "next/server";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

// No metadata here on purpose: the home page uses the default title from layout.tsx.

export default async function Home() {
  // Wait for a real visitor's request. Without this line, Next.js would run
  // the query once during `npm run build` and keep serving that old result.
  await connection();

  // Query Postgres on every request, so the page always shows the latest rows.
  const projects = await getProjects();
  const renderedAt = new Date().toLocaleTimeString();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I&apos;m a statistician and data scientist learning full-stack
          development with Next.js and React. Here are some of my recent
          projects.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Page rendered at {renderedAt}
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
