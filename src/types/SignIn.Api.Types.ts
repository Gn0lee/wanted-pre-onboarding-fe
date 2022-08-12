export interface SignInApiRes {
  statusCode?: number;
  access_token?: string;
  message?: string;
  error?: string;
}

export interface SignInApiError {
  error: string;
  statusCode: number;
  message: string;
}
