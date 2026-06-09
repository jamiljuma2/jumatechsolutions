import type { z } from "zod";
import { changePasswordSchema, loginSchema, resetPasswordSchema } from "../schemas/auth.schema.js";

export type LoginPayload = z.infer<typeof loginSchema>;
export type ChangePasswordPayload = z.infer<typeof changePasswordSchema>;
export type ResetPasswordPayload = z.infer<typeof resetPasswordSchema>;
