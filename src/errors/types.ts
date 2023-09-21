/**
 * Define error constants
 */

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
