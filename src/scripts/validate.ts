import { readFileSync } from "node:fs";
import { ProfileSchema } from "../schemas/profile.js";

const rawProfile = readFileSync("data/profile.json", "utf-8");
const profile = JSON.parse(rawProfile);

ProfileSchema.parse(profile);

console.log("Profile data is valid.");
