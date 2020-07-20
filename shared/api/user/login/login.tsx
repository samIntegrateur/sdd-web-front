import { useCallback, useContext, useEffect, useState } from 'react';
import { ApiResponseData, ApiResponseError, GraphQlQuery } from '../../api.types';
import { handleGraphQlQuery } from '../../utils';
import { AuthContext } from '../../../../providers/Auth';

interface LoginResponseData {
  login: {
    user : {
      id: string;
      username: string;
      email:  string;
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

  const { setAuthenticated, setUser } = useContext<AuthContext>(AuthContext);

  const [query, setQuery] = useState<GraphQlQuery>();
  const [data, setData] = useState<LoginResponseData>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ApiResponseError>();

  useEffect(() => {
    setQuery({
      query: `
        mutation {
          login(email: "${email}", password: "${password}") {
            user {
              id
              username
              email
            }
          }
        }
      `
    });
  }, [email, password]);


  const makeRequest = useCallback(async () => {
    const queryResult = await handleGraphQlQuery<LoginResponseData>(query!);
    setData(queryResult.data);

    if (queryResult.data?.login?.user) {
      // update context
      setAuthenticated(true);
      setUser(queryResult.data?.login?.user);
    }

    setErrors(queryResult.errors);
  }, [query, setAuthenticated, setUser]);

  useEffect(() => {
    if (autoTrigger && query) {
      setLoading(true);
      setErrors(undefined);
      makeRequest().then(() => setLoading(false));
    }
  }, [query, makeRequest, autoTrigger]);

  const triggerQuery = () => {
    if (query) {
      setLoading(true);
      setErrors(undefined);
      makeRequest().then(() => setLoading(false));
    }
  };

  return { data, loading, errors, triggerQuery };
};
