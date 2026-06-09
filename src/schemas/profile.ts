import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string(),
  brand: z.string(),
  title: z.string(),
  location: z.string(),
  summary: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;
