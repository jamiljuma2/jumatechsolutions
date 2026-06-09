import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(30).optional().or(z.literal("")),
  subject: z.string().min(2).max(160),
  message: z.string().min(10).max(5000)
});
