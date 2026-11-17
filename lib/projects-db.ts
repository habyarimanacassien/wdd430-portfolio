// Project data now lives in a PostgreSQL database hosted on Vercel (Neon).
// The exported types and function names are unchanged, but the functions are
// now async, so callers must `await` them.

import { sql } from "@vercel/postgres";

export type ProjectType = "opensource" | "school";

export interface ProjectRecord {
  id: number;
  type: ProjectType;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

// The database returns NULL for a missing link; TypeScript expects it to be absent.
type ProjectRow = Omit<ProjectRecord, "link"> & { link: string | null };

function toRecord(row: ProjectRow): ProjectRecord {
  const { link, ...rest } = row;
  return link ? { ...rest, link } : rest;
}

export function isProjectType(value: string): value is ProjectType {
  return value === "opensource" || value === "school";
}

// Returns every project, or only those of one type when a type is given.
export async function getProjects(type?: ProjectType): Promise<ProjectRecord[]> {
  const { rows } = type
    ? await sql<ProjectRow>`
        SELECT id, type, title, description, technologies, link
        FROM projects
        WHERE type = ${type}
        ORDER BY id`
    : await sql<ProjectRow>`
        SELECT id, type, title, description, technologies, link
        FROM projects
        ORDER BY id`;
  return rows.map(toRecord);
}

// Returns one project, or undefined when no project has that id.
export async function getProjectById(id: number): Promise<ProjectRecord | undefined> {
  // Postgres INTEGER ids only go up to 2147483647; anything else can't match.
  if (!Number.isInteger(id) || id < 1 || id > 2147483647) return undefined;

  const { rows } = await sql<ProjectRow>`
    SELECT id, type, title, description, technologies, link
    FROM projects
    WHERE id = ${id}`;
  return rows[0] ? toRecord(rows[0]) : undefined;
}

// ---------- Search and pagination ----------

export const ITEMS_PER_PAGE = 6;

// Never trust text from the URL. Trim it, cap its length, and escape the
// LIKE wildcards (% and _) so "50%" searches for "50%", not "50 + anything".
function toSearchPattern(query: string): string {
  const cleaned = query.trim().slice(0, 100).replace(/[\\%_]/g, "\\$&");
  return `%${cleaned}%`; // an empty query becomes "%%", which matches everything
}

// One page of projects whose title, description, or a technology contains the query.
// The ${...} values are sent as SQL parameters, never pasted into the SQL text,
// so they cannot cause SQL injection.
export async function fetchFilteredProjects(
  query: string,
  currentPage: number,
): Promise<ProjectRecord[]> {
  const pattern = toSearchPattern(query);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { rows } = await sql<ProjectRow>`
    SELECT id, type, title, description, technologies, link
    FROM projects
    WHERE title ILIKE ${pattern}
       OR description ILIKE ${pattern}
       OR array_to_string(technologies, ' ') ILIKE ${pattern}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
  return rows.map(toRecord);
}

// How many pages the search results fill (0 when nothing matches).
export async function fetchProjectsPages(query: string): Promise<number> {
  const pattern = toSearchPattern(query);

  const { rows } = await sql<{ count: number }>`
    SELECT COUNT(*)::int AS count
    FROM projects
    WHERE title ILIKE ${pattern}
       OR description ILIKE ${pattern}
       OR array_to_string(technologies, ' ') ILIKE ${pattern}`;
  return Math.ceil(rows[0].count / ITEMS_PER_PAGE);
}
