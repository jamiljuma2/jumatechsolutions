import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8)
});

export const resetPasswordSchema = z.object({
  token: z.string().min(8),
  password: z.string().min(8)
});
