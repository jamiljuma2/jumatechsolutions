import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type JwtPayload = {
  sub: string;
  role: string;
  email: string;
};

export function signSession(payload: JwtPayload) {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"]
  });
}

export function verifySession(token: string) {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
}
