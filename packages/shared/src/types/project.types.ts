import type { z } from "zod";
import { projectSchema, projectStatusSchema } from "../schemas/project.schema.js";

export type Project = z.infer<typeof projectSchema>;
export type ProjectStatus = z.infer<typeof projectStatusSchema>;
