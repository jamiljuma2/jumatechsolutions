import type { NextFunction, Request, Response } from "express";
import { env } from "../config/env.js";
import { verifySession } from "../utils/jwt.js";

export type AuthenticatedRequest = Request & {
  user?: {
    id: string;
    role: string;
    email: string;
  };
};

export function requireAuth(request: AuthenticatedRequest, response: Response, next: NextFunction) {
  const token = request.cookies?.[env.COOKIE_NAME];

  if (!token) {
    response.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  try {
    const payload = verifySession(token);
    request.user = { id: payload.sub, role: payload.role, email: payload.email };
    next();
  } catch {
    response.status(401).json({ success: false, message: "Invalid session" });
  }
}
