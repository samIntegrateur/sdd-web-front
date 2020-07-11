import { useEffect, useState } from 'react';
import { ApiResponseData, ApiResponseError, GraphQlQuery } from '../../api.types';
import { handleGraphQlQuery } from '../../utils';

interface LoginResponseData {
  login: {
    accessToken: string;
    user : {
      id: string;
      username: string;
    }
  }
}

interface LoginProps {
  email: string,
  password: string,
}

export const useLogin = (
  {
    email,
    password,
  }: LoginProps
): ApiResponseData<LoginResponseData> => {

  const [query, setQuery] = useState<GraphQlQuery>();
  const [data, setData] = useState<LoginResponseData>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ApiResponseError>();

  useEffect(() => {
    setQuery({
      query: `
        mutation {
          login(email: "${email}", password: "${password}") {
            accessToken
            user {
              id
              username
            }
          }
        }
      `
    });
  }, [email, password]);

  useEffect(() => {
    const makeRequest = async () => {

      const queryResult = await handleGraphQlQuery<LoginResponseData>(query!);

      setData(queryResult.data);
      setErrors(queryResult.errors);
    }

    if (query) {
      setLoading(true);
      setErrors(undefined);
      makeRequest().then(() => setLoading(false));
    }
  }, [query]);

  return { data, loading, errors };
};
