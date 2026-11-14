import { headers } from "next/headers";
import type { ProjectRecord, ProjectType } from "./projects-db";

// Used by the /projects pages (Server Components) to call our own API.
// On the server, fetch() needs a full URL, so we build it from the incoming
// request's host. That works on localhost and on Vercel without any config.
// Reading headers() also makes these pages render per request, which is needed:
// at build time there is no running server for the fetch to reach.
export async function fetchProjects(type?: ProjectType): Promise<ProjectRecord[]> {
  const h = await headers();
  const host = h.get("host");
  const protocol = h.get("x-forwarded-proto") ?? "http";

  const url = new URL("/api/projects", `${protocol}://${host}`);
  if (type) url.searchParams.set("type", type);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load projects (${res.status})`);
  }
  return res.json();
}
