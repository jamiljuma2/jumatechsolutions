import type { NextFunction, Request, RequestHandler, Response } from "express";
import type { ZodTypeAny } from "zod";

export function validateBody(schema: ZodTypeAny): RequestHandler {
  return (request: Request, response: Response, next: NextFunction) => {
    const result = schema.safeParse(request.body);
    if (!result.success) {
      response.status(400).json({ success: false, message: "Validation failed", details: result.error.flatten() });
      return;
    }

    request.body = result.data;
    next();
  };
}
