import { writeFileSync } from "node:fs";
import { readJsonFile } from "../lib/read-json.js";
import { ProjectsSchema } from "../schemas/project.js";

const projects = readJsonFile("data/projects.json", ProjectsSchema);

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
