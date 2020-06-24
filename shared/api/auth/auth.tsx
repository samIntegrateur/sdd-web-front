import { API_BASE_URL } from '../../constants';
import { ApiResponse, ApiResponseData, ErrorItem } from '../api.types';
import { LoginResponseData } from './auth.types';
import { handleTechnicalError } from '../utils';

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
    const response = await fetch(`${API_BASE_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphQLQuery),
    });

    console.log('response', response);

    if (response.status !== 200 && response.status !== 201) {
      return handleTechnicalError(new Error('Invalid response'), response);
    }

    const data: ApiResponse<LoginResponseData> = await response.json();

    console.log('data', data);

    if (data.errors && data.errors.length) {

      const sanitizedErrors: ErrorItem[] = data.errors.map(error => {
        return {
          message: error.message,
        };
      });

      return {
        success: false,
        errors: {
          userReadable: true,
          errorList: sanitizedErrors,
        },
      };
    }

    return {
      success: true,
      data: data.data,
    };

  } catch (e) {
    return handleTechnicalError(e);
  }
};
