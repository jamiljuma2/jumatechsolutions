import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

export const projectRouter = Router();

const sampleProjects = [
  {
    id: "sample-1",
    title: "Business Platform",
    slug: "business-platform",
    description: "A responsive software platform with a secure admin area.",
    category: "Web App",
    technologies: ["Next.js", "Express", "PostgreSQL"],
    featured: true,
    status: "published"
  }
];

projectRouter.get("/", (_request, response) => {
  response.json({ success: true, data: sampleProjects });
});

projectRouter.get("/admin", requireAuth, (_request, response) => {
  response.json({ success: true, data: sampleProjects });
});

projectRouter.get("/:slug", (request, response) => {
  const project = sampleProjects.find((item) => item.slug === request.params.slug);
  if (!project) {
    response.status(404).json({ success: false, message: "Project not found" });
    return;
  }

  response.json({ success: true, data: project });
});

projectRouter.post("/", requireAuth, (_request, response) => {
  response.status(201).json({ success: true, data: { created: true } });
});

projectRouter.put("/:id", requireAuth, (_request, response) => {
  response.json({ success: true, data: { updated: true } });
});

projectRouter.delete("/:id", requireAuth, (_request, response) => {
  response.json({ success: true, data: { deleted: true } });
});

projectRouter.patch("/:id/feature", requireAuth, (_request, response) => {
  response.json({ success: true, data: { toggled: true } });
});

projectRouter.post("/:id/images", requireAuth, (_request, response) => {
  response.status(201).json({ success: true, data: { uploaded: true } });
});

projectRouter.delete("/:id/images/:imageId", requireAuth, (_request, response) => {
  response.json({ success: true, data: { removed: true } });
});
