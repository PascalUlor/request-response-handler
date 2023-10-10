/**
 * Define error constants
 */

export const BAD_REQUEST = 400;
export const CONFLICT = 409;
export const NOT_FOUND = 404;
export const SERVER_ERROR = 500;
export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;

export enum ErrorStatusCodes {
    BAD_REQUEST = 400,
    CONFLICT = 409,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
}

export interface CustomError extends Error {
    status?: ErrorStatusCodes,
    type?: any,
    body?: any,
}
