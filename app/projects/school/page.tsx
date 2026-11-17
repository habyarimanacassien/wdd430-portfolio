import type { Metadata } from "next";
import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";
import { ProjectListSkeleton } from "@/components/Skeletons";

export const metadata: Metadata = {
  title: "School Projects",
  description: "School projects by Cassien Habyarimana.",
};

// No longer async: the data fetching moved into SchoolProjectList.
export default function SchoolProjects() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">School Projects</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Projects I built as part of my coursework.
      </p>

      {/* Heading renders immediately; the list streams in when data is ready. */}
      <Suspense fallback={<ProjectListSkeleton count={1} />}>
        <SchoolProjectList />
      </Suspense>
    </>
  );
}
