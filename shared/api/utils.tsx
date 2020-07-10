import { ApiResponse, ApiResponseData, ErrorItem, GraphQLErrors } from './api.types';
import { API_BASE_URL } from '../constants';
import exp from 'constants';

export const fetchGraphql = async (query: { query: string }): Promise<Response> => {

  const response = await fetch(`${API_BASE_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  });

  checkResponse(response);

  return response;
};

export const checkResponse = (response: Response) => {
  if (response.status !== 200 && response.status !== 201) {
    return handleTechnicalError(new Error('Invalid response'), response);
  }
}

export const handleTechnicalError = (
  e: Error,
  response?: Response,
  message = "Une erreur s'est produite, l'action n'a pas pu aboutir. Veuillez nous excuser pour le désagrément",
): ApiResponseData<void> => {

  console.log('error', e);
  if (response) {
    console.log('error response', response);
  }

  return {
    success: false,
    errors: {
      userReadable: false,
      message,
    }
  }
};

export const handleResponseErrors = (errors: GraphQLErrors[]): ApiResponseData<void> => {
  const sanitizedErrors: ErrorItem[] = errors.map(error => {
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
