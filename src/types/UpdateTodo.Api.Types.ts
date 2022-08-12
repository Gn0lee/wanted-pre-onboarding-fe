import { Todo } from './GetTodos.Api.Types';

export interface UpdateTodoApiRes extends Todo {}

export interface UpdateTodoApiError {
  error: string;
  statusCode: number;
  message: string;
}
