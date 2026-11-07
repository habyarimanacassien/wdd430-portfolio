import Link from "next/link";

// Server Component: no "use client", so it renders on the server and
// sends plain HTML to the browser (no extra JavaScript for this component).
export default function Header() {
  return (
    <header className="bg-blue-600 py-4 text-white shadow-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4">
        <div id="header-title" className="text-2xl font-bold">
          Cassien Habyarimana
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
