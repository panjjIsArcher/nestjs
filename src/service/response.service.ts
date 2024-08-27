import { Response as ApiResponse } from '../interfaces/response.interface';
export function apiResponse<T>(
  data: T,
  message: string,
  statusCode: number,
): ApiResponse<T> {
  return { data, message, statusCode };
}
