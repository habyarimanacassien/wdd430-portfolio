// Server Component: the year is calculated on the server when the page is built.
export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-800 py-4 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} | Cassien Habyarimana |
          All rights reserved
        </p>
        <p className="mt-1 text-sm text-gray-300">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
