import { SuccessStatusCodes } from '@src/success/types';

/**
  *Create success response data format
  *
  * @param {object} res
  * @param {number} statusCode
  * @param {object} body
  * @param {string} [message='successful']
  * @return {object}
  */
export const handleResponse = (res: any, statusCode: SuccessStatusCodes, message: string, body?: any): any => {
  if (!body) {
    return res.status(statusCode).json({
      success: true,
      statusCode,
      message: message || 'successful',
    });
  }
  return res.status(statusCode).json({
    success: true,
    statusCode,
    message,
    body,
  });
};
