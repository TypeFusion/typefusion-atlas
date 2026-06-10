import { z } from "zod";

const ProjectCategorySchema = z.enum([
  "career-system",
  "frontend-tool",
  "api-tool",
  "data-tool",
  "learning-project",
  "archive",
]);

const ProjectStatusSchema = z.enum([
  "active",
  "maintained",
  "paused",
  "archived",
  "learning",
]);

const ProjectCareerValueSchema = z.enum([
  "portfolio",
  "resume",
  "learning",
  "reference",
  "archive",
]);

const ProjectSourceTypeSchema = z.enum(["original", "fork"]);

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: ProjectCategorySchema,
  techStack: z.array(z.string()),
  status: ProjectStatusSchema,
  careerValues: z.array(ProjectCareerValueSchema),
  resumeVisible: z.boolean(),
  repositoryUrl: z.string().url(),
  sourceType: ProjectSourceTypeSchema,
});

export const ProjectsSchema = z.array(ProjectSchema);

export type Project = z.infer<typeof ProjectSchema>;
