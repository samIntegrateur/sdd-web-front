import { useCallback, useEffect, useState } from 'react';
import { ApiResponseData, ApiResponseError, GraphQlQuery } from '../../api.types';
import { handleGraphQlQuery } from '../../utils';
import { Offer } from '../../../types/offer.type';

interface GetOfferResponseData {
  getOffer: Offer;
}

interface GetOfferProps {
  id: string;
  autoTrigger?: boolean;
}

export const useGetOffer = (
  {
    id,
    autoTrigger = true,
  }: GetOfferProps
): ApiResponseData<GetOfferResponseData> => {

  const [query, setQuery] = useState<GraphQlQuery>();
  const [data, setData] = useState<GetOfferResponseData>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ApiResponseError>();

  useEffect(() => {
    setQuery({
      query: `
        {
          GetOffer(id: "${id}") {
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
  }, [id]);


  const makeRequest = useCallback(async () => {
    const queryResult = await handleGraphQlQuery<GetOfferResponseData>(query!);
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
