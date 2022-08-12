export type GetTodosApiRes = Todo[];

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface GetTodosApiError {
  error: string;
  statusCode: number;
  message: string;
}
