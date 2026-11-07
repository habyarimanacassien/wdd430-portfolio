import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cassien Habyarimana | Portfolio",
    // Each page sets only its own part, e.g. "About" becomes "About | Cassien Habyarimana".
    template: "%s | Cassien Habyarimana",
  },
  description:
    "Portfolio of Cassien Habyarimana, a statistician and data scientist learning Next.js and React.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Header />
        {/* The only <main> on the site: every page's content is rendered here. */}
        <main id="main-content" className="min-w-0 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
