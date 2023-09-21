import 'module-alias/register'
import { SuccessStatusCodes } from '@src/success/types';
import { ErrorStatusCodes } from '@src/errors/types';
import { handleResponse as success } from '@src/success';
import { customErrorHandler as errorHandler, createError as customError } from '@src/errors';

export {
  success,
  errorHandler,
  customError,
  SuccessStatusCodes,
  ErrorStatusCodes,
};
