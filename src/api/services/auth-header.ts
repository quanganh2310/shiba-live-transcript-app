import { IAuthUser } from '../../types/user';

export interface IAuthHeader {
  [key: string]: string | number | boolean;
}

export default function authHeader(): IAuthHeader {
  const user: IAuthUser = JSON.parse(localStorage.getItem('user') || 'null');
  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}
