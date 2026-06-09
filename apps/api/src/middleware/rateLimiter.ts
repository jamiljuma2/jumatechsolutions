import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const rateLimit = require("express-rate-limit") as typeof import("express-rate-limit").default;

export const generalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false
});

export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false
});
