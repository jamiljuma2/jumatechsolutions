import { Router } from "express";
import { loginSchema } from "@repo/shared";
import { validateBody } from "../middleware/validate.js";
import { authRateLimiter } from "../middleware/rateLimiter.js";
import { signSession } from "../utils/jwt.js";
import { env } from "../config/env.js";
import bcrypt from "bcryptjs";

export const authRouter = Router();

authRouter.post("/login", authRateLimiter, validateBody(loginSchema), async (request, response) => {
  const { email, password } = request.body as { email: string; password: string };

  const adminEmail = env.ADMIN_EMAIL;
  const adminPasswordHash = env.ADMIN_PASSWORD_HASH;
  const adminPlainPassword = env.ADMIN_PASSWORD;

  let isAdmin = false;

  if (adminEmail && adminPasswordHash) {
    isAdmin = email === adminEmail && (await bcrypt.compare(password, adminPasswordHash));
  } else if (adminEmail && adminPlainPassword) {
    // Warning: comparing against plain password from env — prefer setting ADMIN_PASSWORD_HASH
    isAdmin = email === adminEmail && password === adminPlainPassword;
  } else {
    // Fallback for dev: legacy seed admin
    isAdmin = email === "admin@jumatech.solutions" && password === "changeme123";
  }

  if (!isAdmin) {
    response.status(401).json({ success: false, message: "Invalid credentials" });
    return;
  }

  const token = signSession({ sub: "seed-admin", role: "admin", email });
  response.cookie(env.COOKIE_NAME, token, { httpOnly: true, sameSite: "lax", secure: env.NODE_ENV === "production", path: "/" });
  response.json({ success: true, data: { id: "seed-admin", email, role: "admin" } });
});

authRouter.post("/logout", (_request, response) => {
  response.clearCookie(env.COOKIE_NAME, { path: "/" });
  response.json({ success: true, data: { loggedOut: true } });
});

authRouter.get("/me", (request, response) => {
  const token = request.cookies?.[env.COOKIE_NAME];
  if (!token) {
    response.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  response.json({ success: true, data: { id: "seed-admin", email: "admin@jumatech.solutions", role: "admin" } });
});

authRouter.post("/forgot-password", (_request, response) => {
  response.json({ success: true, data: { queued: true } });
});

authRouter.post("/reset-password", (_request, response) => {
  response.json({ success: true, data: { reset: true } });
});

authRouter.put("/change-password", (_request, response) => {
  response.json({ success: true, data: { changed: true } });
});
