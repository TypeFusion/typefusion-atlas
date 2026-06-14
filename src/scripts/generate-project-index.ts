import { readFileSync, writeFileSync } from "node:fs";
import { ProjectsSchema } from "../schemas/project.js";

const rawProjects = readFileSync("data/projects.json", "utf-8");
const projects = ProjectsSchema.parse(JSON.parse(rawProjects));

const lines = [
  "# Project Index",
  "",
  "Generated from `data/projects.json`.",
  "",
];

for (const project of projects) {
  lines.push(`## ${project.name}`);
  lines.push("");
  lines.push(project.description);
  lines.push("");
  lines.push(`- Category: ${project.category}`);
  lines.push(`- Status: ${project.status}`);
  lines.push(`- Career Value: ${project.careerValues.join(", ")}`);
  lines.push(`- Tech Stack: ${project.techStack.join(", ")}`);
  lines.push(`- Repository: [GitHub](${project.repositoryUrl})`);
  lines.push("");
}

writeFileSync("generated/project-index.md", `${lines.join("\n")}\n`);

console.log("Generated project index.");
