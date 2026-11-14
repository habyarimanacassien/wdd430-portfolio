"use client"; // Error boundaries must be Client Components.

// Shown in place of a /projects/* page if its data fetch throws (for example,
// the API returns an error). The projects layout and tabs stay on screen.
export default function ProjectsError({ retry }: { error: unknown; retry: () => void }) {
  return (
    <div role="alert" className="rounded border-l-4 border-red-600 bg-red-50 p-4 text-red-900">
      <h2 className="mb-2 text-xl font-bold">Projects could not be loaded.</h2>
      <button
        type="button"
        onClick={() => retry()}
        className="rounded bg-red-700 px-3 py-1 text-white hover:bg-red-800"
      >
        Try again
      </button>
    </div>
  );
}
