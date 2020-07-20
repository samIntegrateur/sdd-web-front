import { useCallback, useContext, useEffect, useState } from 'react';
import { ApiResponseData, ApiResponseError, GraphQlQuery } from '../../api.types';
import { handleGraphQlQuery } from '../../utils';
import { AuthContext } from '../../../../providers/Auth';

interface LogoutResponseData {
  logout: boolean
}

interface LogoutProps {
  autoTrigger?: boolean,
}

// Set autoTrigger to false and use the triggerQuery cb arg to trigger query manually
export const useLogout = (
  {
    autoTrigger = true
  }: LogoutProps
): ApiResponseData<LogoutResponseData> => {

  const { setAuthenticated, setUser } = useContext<AuthContext>(AuthContext);

  const [query, setQuery] = useState<GraphQlQuery>();
  const [data, setData] = useState<LogoutResponseData>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ApiResponseError>();

  useEffect(() => {
    setQuery({
      query: `
        mutation {
          logout
        }
      `
    });
  }, []);


  const makeRequest = useCallback(async () => {
    const queryResult = await handleGraphQlQuery<LogoutResponseData>(query!);
    setData(queryResult.data);

    if (queryResult.data?.logout) {
      // update context
      setAuthenticated(false);
      setUser(null);
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
    console.log('trigger query');
    if (query) {
      setLoading(true);
      setErrors(undefined);
      makeRequest().then(() => setLoading(false));
    }
  };

  return { data, loading, errors, triggerQuery };
};
