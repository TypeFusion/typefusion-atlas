import { readFileSync } from "node:fs";
import { z } from "zod";

export function readJsonFile<T>(filePath: string, schema: z.Schema<T>): T {
  const raw = readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);
  return schema.parse(data);
}
