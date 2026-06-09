import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  response.status(500).json({
    success: false,
    message: error instanceof Error ? error.message : "Unexpected server error"
  });
};
