import axios from 'axios';
import { CreateTodoApiRes } from 'types';
import { API_ADDRESS, TOKEN_KEY } from 'utils';

export default async function createTodoApi(todo: string) {
  const accessToken = localStorage.getItem(TOKEN_KEY);
  if (accessToken) {
    const { data } = await axios.post<CreateTodoApiRes>(
      `${API_ADDRESS}todos`,
      { todo },
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
