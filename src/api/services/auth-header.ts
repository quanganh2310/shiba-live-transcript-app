import { IAuthUser } from '../../types/user';

export interface IAuthHeader {
  [key: string]: string | number | boolean;
}

export default function authHeader(): IAuthHeader {
  const user: IAuthUser = JSON.parse(localStorage.getItem('user') || '{}');
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}
