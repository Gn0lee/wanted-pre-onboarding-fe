import axios from 'axios';
import { API_ADDRESS } from 'utils';

export interface signInApiProps {
  email: string;
  password: string;
}

export default async function singInApi({ email, password }: signInApiProps) {
  const { data } = await axios.post(
    `${API_ADDRESS}/auth/signin`,
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
}
