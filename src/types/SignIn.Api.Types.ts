export interface SignInApiRes {
  access_token: string;
}

export interface SignInApiError {
  error: string;
  statusCode: number;
  message: string;
}
