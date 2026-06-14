import { z } from "zod";
import { id } from "zod/locales";
import { date } from "zod/v3";
const LearningTopicSchema = z.enum([
  "typescript",
  "zod",
  "node",
  "git",
  "github-actions",
  "project-structure",
  "career-data",
]);

export const LearningLogSchema = z.object({
  id: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  title: z.string(),
  topic: z.array(LearningTopicSchema),
  summary: z.string(),
  relatedProjects: z.array(z.string()),
  relatedSkills: z.array(z.string()),
});

export const LearningLogsSchema = z.array(LearningLogSchema);

export type LearningLog = z.infer<typeof LearningLogSchema>;
