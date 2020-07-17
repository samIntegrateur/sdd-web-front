import { useCallback, useEffect, useState } from 'react';
import { ApiResponseData, ApiResponseError, GraphQlQuery } from '../../api.types';
import { handleGraphQlQuery } from '../../utils';
import { setAccessToken } from '../accessToken';

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
  autoTrigger?: boolean,
}

// Set autoTrigger to false and use the triggerQuery cb arg to trigger query manually
export const useLogin = (
  {
    email,
    password,
    autoTrigger = true,
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


  const makeRequest = useCallback(async () => {
    console.log('makeRequest');
    const queryResult = await handleGraphQlQuery<LoginResponseData>(query!);
    console.log('queryResult', queryResult);
    setData(queryResult.data);

    if (queryResult.data?.login?.accessToken) {
      setAccessToken(queryResult.data?.login?.accessToken);
    }

    setErrors(queryResult.errors);
  }, [query]);

  useEffect(() => {
    if (autoTrigger && query) {
      setLoading(true);
      setErrors(undefined);
      makeRequest().then(() => setLoading(false));
    }
  }, [query, makeRequest, autoTrigger]);

  const triggerQuery = () => {
    console.log('trigger query');
    if (query) {
      setLoading(true);
      setErrors(undefined);
      makeRequest().then(() => setLoading(false));
    }
  };

  return { data, loading, errors, triggerQuery };
};
