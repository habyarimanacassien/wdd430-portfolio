"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

// Client Component: it reacts to typing and writes the search term into the URL.
// The server page reads the URL and does the actual filtering.
export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Runs 300 ms after the user stops typing, not on every keystroke.
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // a new search always starts on page 1
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // replace (not push): no history entry per keystroke.
    // scroll: false keeps the page from jumping to the top while typing.
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="mb-6">
      <label htmlFor="project-search" className="mb-2 block font-medium">
        Search projects
      </label>
      <input
        id="project-search"
        type="search"
        placeholder="Title, description, or technology (e.g. TypeScript)"
        defaultValue={searchParams.get("query") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}
