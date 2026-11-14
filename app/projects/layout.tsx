import ProjectsNav from "@/components/ProjectsNav";

// Nested layout: wraps only the /projects/* routes. It renders inside the root
// layout (app/layout.tsx), so the global Header and Footer stay on screen while
// this section adds its own heading and sub-navigation.
export default function ProjectsLayout({ children }: LayoutProps<"/projects">) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
        Projects
      </p>
      <ProjectsNav />
      {children}
    </div>
  );
}
