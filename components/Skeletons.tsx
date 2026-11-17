// Loading placeholders (skeletons) shown while project data streams in.
// Gray boxes roughly match the real ProjectCard, so the page doesn't jump
// when the real content replaces them. motion-safe: skips the pulse for
// people who turn off animations in their system settings.

export function ProjectCardSkeleton() {
  return (
    <div className="rounded border-l-4 border-gray-300 bg-gray-50 p-4">
      <div className="mb-3 h-6 w-2/3 rounded bg-gray-200" /> {/* title */}
      <div className="mb-2 h-4 w-full rounded bg-gray-200" /> {/* description */}
      <div className="mb-4 h-4 w-5/6 rounded bg-gray-200" />
      <div className="h-4 w-1/2 rounded bg-gray-200" /> {/* technologies */}
    </div>
  );
}

export function ProjectListSkeleton({ count = 2 }: { count?: number }) {
  return (
    <div role="status" className="grid gap-4 motion-safe:animate-pulse md:grid-cols-2">
      <span className="sr-only">Loading projects…</span>
      {Array.from({ length: count }, (_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
