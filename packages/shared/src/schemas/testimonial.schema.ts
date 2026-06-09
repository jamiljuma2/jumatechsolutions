import { z } from "zod";

export const testimonialSchema = z.object({
  id: z.string().uuid().optional(),
  clientName: z.string().min(2).max(120),
  company: z.string().min(2).max(120),
  photo: z.string().url().optional().or(z.literal("")),
  review: z.string().min(20),
  rating: z.number().int().min(1).max(5)
});
