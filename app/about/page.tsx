import type { Metadata } from "next";
import SkillCard from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Cassien Habyarimana: a statistician and data scientist who solves problems with data.",
};

const skillGroups = [
  {
    title: "Statistics & Mathematics",
    skills: ["Statistical modeling", "Data analysis", "Mathematics"],
  },
  {
    title: "Data Science",
    skills: ["Machine learning", "Data visualization", "Large datasets"],
  },
  {
    title: "Programming",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">About Me</h1>
      <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
        I am a statistician and data scientist with a passion for solving
        complex problems using data-driven approaches. I also have a strong
        background in mathematics and programming, which allows me to develop
        innovative solutions and extract insights from data.
      </p>
      <p className="mb-10 text-lg text-gray-700 dark:text-gray-300">
        My expertise includes statistical modeling, machine learning, data
        visualization, and data analysis. I enjoy working with large datasets
        and extracting meaningful information to support decision-making.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>
    </div>
  );
}
