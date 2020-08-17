import { useCallback, useEffect, useState } from 'react';
import { ApiResponseData, ApiResponseError, GraphQlQuery } from '../../api.types';
import { handleGraphQlQuery } from '../../utils';
import { Offer } from '../../../types/offer.type';

interface GetOffersResponseData {
  getOffers: Offer[];
}

interface GetOffersProps {
  autoTrigger?: boolean;
}

export const useGetOffers = (
  {
    autoTrigger = true,
  }: GetOffersProps
): ApiResponseData<GetOffersResponseData> => {

  const [query, setQuery] = useState<GraphQlQuery>();
  const [data, setData] = useState<GetOffersResponseData>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ApiResponseError>();

  useEffect(() => {
    setQuery({
      query: `
        {
          getOffers {
            id
            updatedAt
            title
            description
            status
            imageUrl
            author {
              username
            }
          }
        }
      `
    });
  }, []);


  const makeRequest = useCallback(async () => {
    const queryResult = await handleGraphQlQuery<GetOffersResponseData>(query!);
    setData(queryResult.data);
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
    if (query) {
      setLoading(true);
      setErrors(undefined);
      makeRequest().then(() => setLoading(false));
    }
  };

  return { data, loading, errors, triggerQuery };
};
