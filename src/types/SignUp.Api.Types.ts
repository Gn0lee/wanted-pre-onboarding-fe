export interface SignUpApiRes {
  access_token: string;
}

export interface SignUpApiError {
  error: string;
  statusCode: number;
  message: string;
}
