interface SkillCardProps {
  title: string;
  skills: string[];
}

// Step 8 custom component: a small card that shows one group of skills.
// Server Component (no "use client"), styled only with Tailwind CSS.
export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <article className="rounded border-t-4 border-blue-600 bg-gray-50 p-4 text-gray-900 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-900"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
