import { ApiResponseData, ApiResponseError } from './api.types';

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
