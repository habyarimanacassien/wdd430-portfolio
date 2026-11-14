import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to get in touch with Cassien Habyarimana.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">Contact Me</h1>
      <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
        Thanks for visiting my portfolio! A contact form is coming soon.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        In the meantime, you can find my work on{" "}
        <a
          href="https://github.com/habyarimanacassien"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:no-underline dark:text-blue-400"
        >
          GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </div>
  );
}
