import { API_BASE_URL } from '../../../constants';
import { ApiResponse, ApiResponseData, ErrorItem } from '../../api.types';
import { fetchGraphql, handleResponseErrors, handleTechnicalError } from '../../utils';


export const logout = async (): Promise<ApiResponseData<boolean | void>> => {
  //
  // const graphQLQuery = {
  //   query: `
  //     mutation {
  //       logout
  //     }
  //   `
  // };
  //
  // try {
  //   const response = await fetchGraphql(graphQLQuery);
  //
  //   console.log('response', response);
  //
  //   const data: ApiResponse<boolean> = await response.json();
  //
  //   console.log('data', data);
  //
  //   if (data.errors && data.errors.length) {
  //     handleResponseErrors(data.errors);
  //   }
  //
  //   return {
  //     success: true,
  //     data: data.data,
  //   };
  //
  // } catch (e) {
  //   return handleTechnicalError(e);
  // }
};
