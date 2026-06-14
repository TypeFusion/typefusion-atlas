import { writeFileSync } from "node:fs";
import { readJsonFile } from "../lib/read-json.js";
import { ProjectsSchema } from "../schemas/project.js";
import { SkillsSchema } from "../schemas/skill.js";

const projects = readJsonFile("data/projects.json", ProjectsSchema);
const skills = readJsonFile("data/skills.json", SkillsSchema);

const projectsById = new Map(projects.map((project) => [project.id, project]));

const lines = [
  "# Skill Map",
  "",
  "Generated from `data/skills.json` and `data/projects.json`.",
  "",
];

for (const skill of skills) {
  lines.push(`## ${skill.name}`);
  lines.push("");
  lines.push(`- Category: ${skill.category}`);
  lines.push(`- Level: ${skill.level}`);
  lines.push("- Evidence:");

  for (const projectId of skill.evidence) {
    const project = projectsById.get(projectId);

    if (!project) {
      throw new Error(
        `Skill "${skill.name}" references unknown project id "${projectId}".`,
      );
    }

    lines.push(`  - [${project.name}](${project.repositoryUrl})`);
  }

  lines.push("");
}

writeFileSync("generated/skill-map.md", `${lines.join("\n")}\n`);

console.log("Generated skill map.");
