"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// Client Component: usePathname() is a client hook, so this small piece of the
// header runs in the browser. The rest of Header stays a Server Component.
export default function NavLinks() {
  const pathname = usePathname();

  // "/" must match exactly (every path starts with "/"). Other links also
  // match their sub-pages, so "Projects" stays active on /projects/school.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex gap-6">
        {links.map(({ href, label }) => {
          const active = isActive(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "active border-b-2 border-white pb-1 font-semibold"
                    : "border-b-2 border-transparent pb-1 hover:border-blue-200"
                }
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
