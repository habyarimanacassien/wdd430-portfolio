import NavLinks from "./NavLinks";

// Server Component: no "use client", so it renders on the server. Only the
// NavLinks inside it is a Client Component (it needs usePathname()).
export default function Header() {
  return (
    <header className="bg-blue-600 py-4 text-white shadow-md">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-4">
        <div id="header-title" className="text-2xl font-bold">
          Cassien Habyarimana
        </div>
        <NavLinks />
      </div>
    </header>
  );
}
