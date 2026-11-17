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