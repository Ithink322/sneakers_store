export type ApiSuccessResponse<
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  success: true;
  message?: string;
} & T;

export type ApiFailResponse = {
  success: false;
  message: string;
};

export type ApiResponse<
  T extends Record<string, unknown> = Record<string, unknown>,
> =
  | ApiSuccessResponse<T>
  | ApiFailResponse;
