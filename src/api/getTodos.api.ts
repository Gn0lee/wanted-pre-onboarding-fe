import axios from 'axios';
import { GetTodosApiRes } from 'types';
import { API_ADDRESS, TOKEN_KEY } from 'utils';

export default async function getTodosApi() {
  const accessToken = localStorage.getItem(TOKEN_KEY);
  if (accessToken) {
    const { data } = await axios.get<GetTodosApiRes>(`${API_ADDRESS}todos`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  }
  throw new Error('no token');
}
