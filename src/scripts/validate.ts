import { readJsonFile } from "../lib/read-json.js";
import { ProfileSchema } from "../schemas/profile.js";
import { ProjectsSchema } from "../schemas/project.js";
import { SkillsSchema } from "../schemas/skill.js";

readJsonFile("data/profile.json", ProfileSchema);
const validatedProjects = readJsonFile("data/projects.json", ProjectsSchema);
const validatedSkills = readJsonFile("data/skills.json", SkillsSchema);

const projectIds = new Set(validatedProjects.map((p) => p.id));
for (const skill of validatedSkills) {
  for (const projectId of skill.evidence) {
    if (!projectIds.has(projectId)) {
      throw new Error(
        `Skill "${skill.name}" references unknown project id "${projectId}".`,
      );
    }
  }
}
console.log("Profile data is valid.");
console.log("Projects data is valid.");
console.log("Skills data is valid.");
