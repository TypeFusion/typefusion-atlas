import { z } from "zod";

const SkillCategorySchema = z.enum([
  "language",
  "framework",
  "runtime",
  "validation",
  "styling",
  "automation",
  "tooling",
  "design",
]);

const SkillLevelSchema = z.enum([
  "learning",
  "comfortable",
  "strong",
  "advanced",
]);

export const SkillSchema = z.object({
  name: z.string(),
  category: SkillCategorySchema,
  level: SkillLevelSchema,
  evidence: z.array(z.string()),
});

export const SkillsSchema = z.array(SkillSchema);

export type Skill = z.infer<typeof SkillSchema>;
