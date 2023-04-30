export type BaseResponse<T = unknown> = {
  status?: string;
  data?: T;
};
