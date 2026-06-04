import axios from "axios";

export function getApiErrorMessage(
  error: unknown,
  fallback = "Произошла ошибка. Попробуйте позже."
): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { message?: string } | undefined;
    if (data && typeof data.message === "string" && data.message.length > 0) {
      return data.message;
    }
  }

  return fallback;
}

export function getApiResponseMessage(
  data: { message?: string } | undefined,
  fallback: string
): string {
  if (data?.message) {
    return data.message;
  }
  return fallback;
}
