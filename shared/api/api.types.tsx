export interface ErrorItem {
  message: string;
}

export interface ApiResponseError {
  userReadable: boolean;
  message?: string;
  errorList?: ErrorItem[]
}

// The object returned by fetch / json
// handle 200 / 201 cases (can wrap errors though)
export interface ApiResponse<T> {
  errors?: [{
    message: string;
    [key: string]: any; // to specify
  }];
  data?: T;
}

// The object returned by the api function
// Handle each case
export interface ApiResponseData<T> {
  success: boolean;
  data?: T;
  errors?: ApiResponseError; // todo specify, errors that can be specified to user like validation and authorization,
  // sanitize too, we don't need to return things like stacktrace
  // and "internal" errors with standard message
}
