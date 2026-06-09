import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

export const messageRouter = Router();

messageRouter.get("/", requireAuth, (_request, response) => {
  response.json({ success: true, data: [] });
});

messageRouter.post("/", (_request, response) => {
  response.status(201).json({ success: true, data: { received: true } });
});
