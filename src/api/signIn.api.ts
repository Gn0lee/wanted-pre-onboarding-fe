import axios from 'axios';
import { SignInApiRes } from 'types';
import { API_ADDRESS } from 'utils';

export interface signInApiProps {
  email: string;
  password: string;
}

export default async function signInApi({ email, password }: signInApiProps) {
  const { data } = await axios.post<SignInApiRes>(
    `${API_ADDRESS}auth/signin`,
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
