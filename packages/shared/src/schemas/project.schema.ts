import { z } from "zod";

export const projectStatusSchema = z.enum(["draft", "published", "archived"]);

export const projectSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(2).max(120),
  slug: z.string().min(2).max(140),
  description: z.string().min(20),
  category: z.string().min(2).max(80),
  technologies: z.array(z.string().min(1)).default([]),
  githubUrl: z.string().url().optional().or(z.literal("")),
  liveUrl: z.string().url().optional().or(z.literal("")),
  featured: z.boolean().default(false),
  status: projectStatusSchema.default("draft"),
  completionDate: z.string().optional().or(z.literal("")),
  deletedAt: z.string().datetime().nullable().optional()
});

export const projectImageSchema = z.object({
  projectId: z.string().uuid(),
  imageUrl: z.string().url(),
  displayOrder: z.number().int().nonnegative().default(0)
});
