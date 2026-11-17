// Visit http://localhost:3000/api/hello to see this JSON response.
// The `message` field is the one the assignment asks for; the rest is extra context.
export async function GET() {
  return Response.json({
    message: "Hello from Next.js API!",
    author: "Cassien Habyarimana",
    pages: ["/", "/about", "/projects", "/contact"],
  });
}
