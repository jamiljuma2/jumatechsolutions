import cookieParser from "cookie-parser";
import express from "express";
import { default as helmet } from "helmet";
import multer from "multer";
import { corsMiddleware } from "./middleware/cors.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { generalRateLimiter } from "./middleware/rateLimiter.js";
import { authRouter } from "./routes/auth.routes.js";
import { messageRouter } from "./routes/message.routes.js";
import { projectRouter } from "./routes/project.routes.js";
import { settingsRouter } from "./routes/settings.routes.js";
import { testimonialRouter } from "./routes/testimonial.routes.js";
import { env } from "./config/env.js";

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(helmet());
app.use(corsMiddleware);
app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());
app.use(generalRateLimiter);

app.get("/health", (_request, response) => {
  response.json({ success: true, data: { status: "ok" } });
});

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);
app.use("/api/testimonials", testimonialRouter);
app.use("/api/messages", messageRouter);
app.use("/api/settings", settingsRouter);

app.post("/api/uploads", upload.single("file"), (_request, response) => {
  response.status(201).json({ success: true, data: { uploaded: true } });
});

app.use(errorHandler);

app.listen(env.API_PORT, () => {
  console.log(`API listening on http://localhost:${env.API_PORT}`);
});
