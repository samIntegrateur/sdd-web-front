import {
  ApiResponse,
  ApiResponseError,
  ErrorItem,
  GraphQLErrors,
  GraphQlQuery,
  QueryResult
} from './api.types';
import { API_BASE_URL } from '../constants';
import { ValidationError } from 'class-validator';

const checkResponse = (response: Response) => {
  if (response.status !== 200 && response.status !== 201) {
    console.log('error in checkResponse', response);
    response.json().then(res => console.log('checkResponse errors', res));
    throw new Error('Invalid response');
  }
}

const fetchGraphql = async (query: GraphQlQuery, isMultipart: boolean): Promise<Response> => {

  const response = await fetch(`${API_BASE_URL}/graphql`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    },
    body: JSON.stringify(query),
  });

  checkResponse(response);

  return response;
};


const handleTechnicalError = (
  e: Error,
  response?: Response,
  message = "Une erreur s'est produite, l'action n'a pas pu aboutir. Veuillez nous excuser pour le désagrément",
): ApiResponseError => {

  console.log('error', e);
  if (response) {
    console.log('error response', response);
  }

  return {
    userReadable: false,
    message,
  }
};


const sanitizeValidationErrors = (validationErrors: ValidationError[]): ErrorItem[] => {
  const sanitizedErrors: ErrorItem[] = [];
  validationErrors.forEach(validationError => {
    if (validationError.constraints) {
      for (const constraint in validationError.constraints) {
        sanitizedErrors.push({ message: validationError.constraints[constraint] });
      }
    }
  });
  return sanitizedErrors;
}

const handleResponseErrors = (
  errors: GraphQLErrors[]
): ApiResponseError => {
  console.log('errors', errors);

  let sanitizedErrors: ErrorItem[] = [];

  errors.forEach(error => {

    // ValidationError case (class-validator - typeGraphql)
    if (error.message === 'Argument Validation Error') {
      sanitizedErrors = [
        ...sanitizedErrors,
        ...sanitizeValidationErrors(error.extensions.exception.validationErrors),
      ]
    } else {
      sanitizedErrors.push({ message: error.message });
    }
  });

  return {
    message: sanitizedErrors.length === 1 ? sanitizedErrors[0].message : undefined,
    userReadable: true,
    errorList: sanitizedErrors,
  };
}

export const handleGraphQlQuery = async<T>(
  query: GraphQlQuery,
  isMultipart = false,
): Promise<QueryResult<T>> => {

  let data, errors;

  try {
    const response = await fetchGraphql(query!, isMultipart);
    const responseData: ApiResponse<T> = await response.json();

    if (responseData.errors && responseData.errors.length) {
      errors = handleResponseErrors(responseData.errors);
    }

    if (responseData.data) {
     data = responseData.data;
    }

  } catch (e) {
    errors = handleTechnicalError(e);
  }

  return { data, errors };
};
