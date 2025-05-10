// eslint-disable-next-line import/no-extraneous-dependencies
import { stringify } from 'flatted';
import { ErrorStatusCodes, CustomError } from '@src/errors/types';
import { createError } from '@src/errors/errors';
import { ObjectInterface } from '@src/utils/types';

/**
   * Handle Bad Requests errors
   *
   * @param {object} err
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @return {*}
   */
const badRequest = (err: CustomError, req: any, res: any, next: any) => {
  if (err.status !== ErrorStatusCodes.BAD_REQUEST) {
    next();
  }

  // Handle invalid JSON body
  if (err.type && err.type.includes('entity.parse.failed')) {
    return res.status(ErrorStatusCodes.BAD_REQUEST).json({
      success: false,
      errors: [
        {
          message: 'Invalid JSON object check request body',
          body: err.body,
        },
      ],
    });
  }

  return res.status(ErrorStatusCodes.BAD_REQUEST).json({
    success: false,
    errors: {
      message: err.message || 'Bad Request',
      status: err.status,
      req: stringify(req),
    },
  });
};

const forbidden = (err: CustomError, req: any, res: any, next: any) => {
  if (err.status !== ErrorStatusCodes.FORBIDDEN) {
    return next(err);
  }

  return res.status(ErrorStatusCodes.FORBIDDEN).json({
    success: false,
    message: err.message || 'Forbidden',
    errors: [err],
    req: stringify(req),
  });
};

const unauthorized = (err: CustomError, req: any, res: any, next: any) => {
  if (err.status !== ErrorStatusCodes.UNAUTHORIZED) {
    return next(err);
  }

  return res.status(ErrorStatusCodes.UNAUTHORIZED).json({
    success: false,
    message: err.message || 'Unauthorized',
    errors: [err],
    req: stringify(req),
  });
};

/**
   * Handle resource not found
   *
   * @param {object} err
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @return {object}
   */
const notFound = (err: CustomError, req: any, res: any, next: any) => {
  if (err.status !== ErrorStatusCodes.NOT_FOUND) {
    return next(err);
  }

  return res.status(ErrorStatusCodes.NOT_FOUND).json({
    success: false,
    message: err.message || 'Resource not found',
    errors: [err],
    req: stringify(req),
  });
};

/**
   * Handle conflict errors for resources that already exist
   *
   * @param {object} err
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @return {object}
   */
const resourceConflict = (err: CustomError, req: any, res: any, next: any) => {
  if (err.status !== ErrorStatusCodes.CONFLICT) {
    return next(err);
  }

  return res.status(ErrorStatusCodes.CONFLICT).json({
    success: false,
    errors: {
      message: err.message,
      status: err.status,
      req: stringify(req),
    },
  });
};

/**
   * Handle server error
   *
   * @param {object} err
   * @param {object} req
   * @param {object} res
   * @param {object} _next
   * @return {object}
   */
/* eslint-disable */
const serverError = (err: CustomError, req: any, res: any, _next?: any): object => res.status(ErrorStatusCodes.SERVER_ERROR).json({
  success: false,
  message: err.message || 'Internal server error',
  errors: [err],
  req: stringify(req),
});
/**
   * Package all error handlers as object
   */
const errorsObject: ObjectInterface = {
  badRequest,
  notFound,
  resourceConflict,
  forbidden,
  unauthorized,
  serverError,
};

/**
   * Export all error middleware as an array
   *
   */
const customErrorHandler = (): any => Object.keys(errorsObject).map((key) => errorsObject[key]);

export {
  customErrorHandler,
  createError,
};
