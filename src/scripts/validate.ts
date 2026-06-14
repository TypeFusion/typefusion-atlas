import { readFileSync } from "node:fs";
import { ProfileSchema } from "../schemas/profile.js";
import { ProjectsSchema } from "../schemas/project.js";
import { SkillsSchema } from "../schemas/skill.js";

const rawProfile = readFileSync("data/profile.json", "utf-8");
const profile = JSON.parse(rawProfile);

ProfileSchema.parse(profile);

const rawProjects = readFileSync("data/projects.json", "utf-8");
const projects = JSON.parse(rawProjects);

const validatedProjects = ProjectsSchema.parse(projects);

const rawSkills = readFileSync("data/skills.json", "utf-8");
const skills = JSON.parse(rawSkills);

const validatedSkills = SkillsSchema.parse(skills);
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
