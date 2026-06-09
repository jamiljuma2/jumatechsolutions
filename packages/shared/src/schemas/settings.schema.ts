import { z } from "zod";

export const settingsSchema = z.object({
  companyName: z.string().min(2).max(160),
  logo: z.string().url().optional().or(z.literal("")),
  email: z.string().email(),
  phone: z.string().min(7).max(30).optional().or(z.literal("")),
  address: z.string().min(2).max(255).optional().or(z.literal("")),
  facebook: z.string().url().optional().or(z.literal("")),
  instagram: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
  twitter: z.string().url().optional().or(z.literal("")),
  seoTitle: z.string().min(2).max(160),
  seoDescription: z.string().min(10).max(320)
});
