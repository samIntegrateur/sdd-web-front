import { AUTH_TOKEN_ACCESS_NAME } from '../../constants';

if (!AUTH_TOKEN_ACCESS_NAME) {
  console.error('AUTH_TOKEN_ACCESS_NAME is not defined');
}

let accessToken = '';

export const setAccessToken = (token: string) => {
  // localStorage.setItem(AUTH_TOKEN_ACCESS_NAME!, token);
  accessToken = token;
}

export const getAccessToken = () => {
    // return localStorage.getItem(AUTH_TOKEN_ACCESS_NAME!);
  return accessToken;
}

export const removeAccessToken = () => {
  // localStorage.removeItem(AUTH_TOKEN_ACCESS_NAME!);
  accessToken = '';
}


export const hasAccessToken = () => {
  return !!accessToken;
};
