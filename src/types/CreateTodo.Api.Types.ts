export interface CreateTodoApiRes {
  todo: string;
  id: number;
  isCompleted: boolean;
}

export interface CreateTodoApiError {
  error: string;
  statusCode: number;
  message: string;
}
