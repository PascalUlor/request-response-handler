import { createError } from '../../src/errors';

describe('createError', () => {
  it('should create custom error', () => {
    expect.assertions(1);

    const message = 'This is custom error message';
    const statusCode = 400;
    const error = createError(message, statusCode);

    expect(error.message).toStrictEqual(message);
  });
});
