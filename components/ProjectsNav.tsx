"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Overview" },
  { href: "/projects/opensource", label: "Open Source" },
  { href: "/projects/school", label: "School" },
];

// Client Component: it needs usePathname() to know which tab is active.
// It lives inside app/projects/layout.tsx, so it stays mounted while you move
// between /projects/* pages (only the page below it is swapped out).
export default function ProjectsNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Projects navigation" className="mb-8 border-b border-gray-300">
      <ul className="flex gap-2">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`-mb-px inline-block border-b-2 px-4 py-2 ${
                  isActive
                    ? "border-blue-600 font-semibold text-blue-700 dark:text-blue-400"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
