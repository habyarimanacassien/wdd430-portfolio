import type { NextRequest } from "next/server";
import { getProjects, isProjectType } from "@/lib/projects-db";

// GET /api/projects                  -> all projects
// GET /api/projects?type=opensource  -> only open source projects
// GET /api/projects?type=school      -> only school projects
export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");

  // No filter: return everything.
  if (type === null) {
    return Response.json(getProjects());
  }

  // A filter we don't recognise (e.g. ?type=foo) is the client's mistake: 400.
  if (!isProjectType(type)) {
    return Response.json(
      { error: 'Invalid type. Use "opensource" or "school".' },
      { status: 400 },
    );
  }

  return Response.json(getProjects(type));
}
