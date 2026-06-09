import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

export const testimonialRouter = Router();

testimonialRouter.get("/", (_request, response) => {
  response.json({ success: true, data: [] });
});

testimonialRouter.post("/", requireAuth, (_request, response) => {
  response.status(201).json({ success: true, data: { created: true } });
});
