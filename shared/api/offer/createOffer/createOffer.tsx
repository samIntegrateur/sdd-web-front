import { useCallback, useContext, useEffect, useState } from 'react';
import { ApiResponseData, ApiResponseError, GraphQlQuery } from '../../api.types';
import { handleGraphQlQuery } from '../../utils';
import { Offer } from '../../../types/offer.type';

interface CreateOfferResponseData {
  createOffer: Offer;
}

interface CreateOfferProps {
  offer: {
    title: string;
    description: string;
  };
  autoTrigger?: boolean;
}

export const useCreateOffer = (
  {
    offer,
    autoTrigger = true,
  }: CreateOfferProps
): ApiResponseData<CreateOfferResponseData> => {

  const [query, setQuery] = useState<GraphQlQuery>();
  const [data, setData] = useState<CreateOfferResponseData>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ApiResponseError>();

  const { title, description } = offer;

  useEffect(() => {
    setQuery({
      query: `
        mutation {
          createOffer(data: {
            title: "${title}",
            description: "${description}"
          }) {
            id
            title
            description
            status
            updatedAt
          }
        }
      `
    });
  }, [title, description]);


  const makeRequest = useCallback(async () => {
    const queryResult = await handleGraphQlQuery<CreateOfferResponseData>(query!);
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
