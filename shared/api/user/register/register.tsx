import { useCallback, useContext, useEffect, useState } from 'react';
import { ApiResponseData, ApiResponseError, GraphQlQuery } from '../../api.types';
import { handleGraphQlQuery } from '../../utils';
import { AuthContext } from '../../../../providers/Auth';
import { User } from '../../../types/user.type';

interface RegisterResponseData {
  register: User,
}

interface RegisterProps {
  username: string,
  email: string,
  password: string,
  autoTrigger?: boolean,
}

// Set autoTrigger to false and use the triggerQuery cb arg to trigger query manually
export const useRegister = (
  {
    username,
    email,
    password,
    autoTrigger = true,
  }: RegisterProps
): ApiResponseData<RegisterResponseData> => {

  const { setAuthenticated, setUser } = useContext<AuthContext>(AuthContext);

  const [query, setQuery] = useState<GraphQlQuery>();
  const [data, setData] = useState<RegisterResponseData>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ApiResponseError>();

  useEffect(() => {
    setQuery({
      query: `
        mutation {
          register(data: { 
              username: "${username}", 
              email: "${email}", 
              password: "${password}" 
            }) {
            id
            username
            email
          }
        }
      `
    });
  }, [username, email, password]);


  const makeRequest = useCallback(async () => {
    const queryResult = await handleGraphQlQuery<RegisterResponseData>(query!);

    console.log('queryResult', queryResult);
    setData(queryResult.data);

    if (queryResult.data?.register) {
      // update context
      setAuthenticated(true);
      setUser(queryResult.data.register);
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
