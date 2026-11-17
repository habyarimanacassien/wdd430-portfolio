import { ProjectListSkeleton } from "@/components/Skeletons";

// Full-page streaming. Next.js wraps page.tsx in <Suspense> and shows
// this file instantly while the page's data loads. Because this file sits in
// the opensource/ folder, it only applies to /projects/opensource. The projects
// layout (heading + tabs) above it stays on screen the whole time.
export default function Loading() {
  return (
    <div className="motion-safe:animate-pulse">
      <div className="mb-4 h-9 w-2/3 rounded bg-gray-200" /> {/* h1 */}
      <div className="mb-8 h-6 w-1/2 rounded bg-gray-200" /> {/* intro text */}
      <ProjectListSkeleton count={2} />
    </div>
  );
}
