import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  API_PORT: z.coerce.number().default(4000),
  CORS_ORIGIN: z.string().url().or(z.string().startsWith("http://")).or(z.string().startsWith("https://")),
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default("7d"),
  COOKIE_NAME: z.string().default("jt_session"),
  DATABASE_URL: z.string().min(1),
  DATABASE_URL_UNPOOLED: z.string().min(1).optional(),
  DATABASE_URL_POOLED: z.string().min(1).optional(),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional()
  ,
  ADMIN_EMAIL: z.string().email().optional(),
  ADMIN_PASSWORD: z.string().optional(),
  ADMIN_PASSWORD_HASH: z.string().optional()
});

export const env = envSchema.parse(process.env);
