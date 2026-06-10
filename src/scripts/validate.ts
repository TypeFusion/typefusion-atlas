import { readFileSync } from "node:fs";
import { ProfileSchema } from "../schemas/profile.js";
import { ProjectsSchema } from "../schemas/project.js";

const rawProfile = readFileSync("data/profile.json", "utf-8");
const profile = JSON.parse(rawProfile);

ProfileSchema.parse(profile);

const rawProjects = readFileSync("data/projects.json", "utf-8");
const projects = JSON.parse(rawProjects);

ProjectsSchema.parse(projects);

console.log("Profile data is valid.");
console.log("Projects data is valid.");
