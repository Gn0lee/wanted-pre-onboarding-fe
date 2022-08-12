import axios from 'axios';
import { UpdateTodoApiRes } from 'types';
import { API_ADDRESS, TOKEN_KEY } from 'utils';

export interface updateTodoApiProps {
  todo: string;
  isCompleted: boolean;
  id: number;
}

export default async function updateTodoApi({
  todo,
  isCompleted,
  id,
}: updateTodoApiProps) {
  const accessToken = localStorage.getItem(TOKEN_KEY);
  if (accessToken) {
    const { data } = await axios.put<UpdateTodoApiRes>(
      `${API_ADDRESS}todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  }
  throw new Error('no token');
}
