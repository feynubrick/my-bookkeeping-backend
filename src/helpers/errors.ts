import * as STATUS_CODE from './constants/http-status-code';

export class CustomError extends Error {
  statusCode: number = STATUS_CODE.INTERNAL_SERVER_ERROR_500;

  constructor(message: string) {
    super(message);
  }
}

export class QueryParameterError extends CustomError {
  statusCode: number = STATUS_CODE.BAD_REQUEST_400;

  constructor(message: string) {
    super(message);
  }
}

export class RequestBodyError extends CustomError {
  statusCode: number = STATUS_CODE.BAD_REQUEST_400;

  constructor(message: string) {
    super(message);
  }
}
