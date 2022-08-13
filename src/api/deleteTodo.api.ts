import axios from 'axios';
import { DeleteTodoApiRes } from 'types';
import { API_ADDRESS, TOKEN_KEY } from 'utils';

export interface DeleteTodoApiProps {
  id: number;
}

export default async function deleteTodoApi({ id }: DeleteTodoApiProps) {
  const accessToken = localStorage.getItem(TOKEN_KEY);
  if (accessToken) {
    const { data } = await axios.delete<DeleteTodoApiRes>(
      `${API_ADDRESS}todos/${id}`,
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
