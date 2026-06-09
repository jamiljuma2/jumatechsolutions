import type { z } from "zod";
import { testimonialSchema } from "../schemas/testimonial.schema.js";

export type Testimonial = z.infer<typeof testimonialSchema>;
