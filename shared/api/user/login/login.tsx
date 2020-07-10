import { API_BASE_URL } from '../../../constants';
import { ApiResponse, ApiResponseData, ErrorItem } from '../../api.types';
import { fetchGraphql, handleResponseErrors, handleTechnicalError } from '../../utils';

interface LoginResponseData {
  id: string;
  username: string;
}

export const login = async (
  email: string,
  password: string,
): Promise<ApiResponseData<LoginResponseData | void>> => {

  // todo: https://github.com/apollographql/graphql-tag ?
  const graphQLQuery = {
    query: `
      mutation {
        login(email: "${email}", password: "${password}") {
          id
          username
        }
      }
    `
  };

  try {
    const response = await fetchGraphql(graphQLQuery);

    console.log('response', response);

    const data: ApiResponse<LoginResponseData> = await response.json();

    console.log('data', data);

    if (data.errors && data.errors.length) {
      handleResponseErrors(data.errors);
    }

    return {
      success: true,
      data: data.data,
    };

  } catch (e) {
    return handleTechnicalError(e);
  }
};
