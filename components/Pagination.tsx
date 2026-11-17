"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number; // already checked by the server page
}

const linkClass =
  "rounded border border-blue-600 px-3 py-1 text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-800";
const disabledClass = "rounded border border-gray-300 px-3 py-1 text-gray-400";

// Client Component: Previous/Next links that keep the current search term.
export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Copy the current URL params (e.g. ?query=type) and change only "page".
  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) return null; // one page or none: nothing to show

  return (
    <nav aria-label="Pagination" className="mt-8 flex items-center justify-center gap-4">
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)} className={linkClass}>
          ← Previous
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledClass}>
          ← Previous
        </span>
      )}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)} className={linkClass}>
          Next →
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledClass}>
          Next →
        </span>
      )}
    </nav>
  );
}
