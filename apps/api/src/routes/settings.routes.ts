import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

export const settingsRouter = Router();

settingsRouter.get("/", (_request, response) => {
  response.json({ success: true, data: { companyName: "JumaTech Solutions" } });
});

settingsRouter.put("/", requireAuth, (_request, response) => {
  response.json({ success: true, data: { updated: true } });
});
