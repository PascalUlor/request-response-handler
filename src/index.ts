import { SuccessStatusCodes, CREATED, OK } from '@src/success/types';
import {
  ErrorStatusCodes,
  BAD_REQUEST,
  CONFLICT,
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
  SERVER_ERROR,
} from '@src/errors/types';
import { handleResponse as success } from '@src/success';
import { customErrorHandler as errorHandler, createError as customError } from '@src/errors';

export {
  success,
  errorHandler,
  customError,
  SuccessStatusCodes,
  ErrorStatusCodes,
  BAD_REQUEST,
  CREATED, OK,
  CONFLICT,
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
  SERVER_ERROR,
};
