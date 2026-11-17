import type { NextRequest } from "next/server";
import { getProjectById } from "@/lib/projects-db";

// GET /api/projects/1    -> 200 with one project
// GET /api/projects/abc  -> 400 (not a valid id)
// GET /api/projects/99   -> 404 (valid id, but no such project)
export async function GET(_request: NextRequest, ctx: RouteContext<"/api/projects/[id]">) {
  // In Next.js 15+ params is a Promise, so it must be awaited.
  const { id } = await ctx.params;

  // Only accept whole positive numbers. This rejects "abc", "1.5", "-1" and "".
  if (!/^\d+$/.test(id)) {
    return Response.json({ error: "Invalid id" }, { status: 400 });
  }

  const project = await getProjectById(Number(id));
  if (!project) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(project);
}
