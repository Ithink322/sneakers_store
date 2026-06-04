import type { ApiFailResponse, ApiSuccessResponse } from "@/types/api";

export function apiSuccess<T extends Record<string, unknown>>(
  data?: T,
  message?: string
): ApiSuccessResponse<T> {
  return {
    success: true,
    ...(message ? { message } : {}),
    ...(data ?? ({} as T)),
  } as ApiSuccessResponse<T>;
}

export function apiFail(message: string): ApiFailResponse {
  return {
    success: false,
    message,
  };
}

export function isMongoDuplicateKeyError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code: number }).code === 11000
  );
}
