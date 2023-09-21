import { ErrorStatusCodes, CustomError } from '@src/errors/types';

/**
  * Create new error
  *
  * @param {String} message
  * @param {number} status
  *
  * @returns {object} error
  */
const createError = ({ message = 'Internal server error', status = ErrorStatusCodes.SERVER_ERROR }): CustomError => {
  const error: CustomError = new Error(message);
  error.status = status;

  return error;
};

export {
  createError,
};
