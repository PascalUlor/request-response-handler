import { createError } from '@src/errors';

describe('createError', () => {
  it('should create custom error', () => {
    expect.assertions(2);

    const message = 'This is custom error message';
    const status = 400;
    const error = createError({ message, status });

    expect(error.message).toStrictEqual(message);
    expect(error.status).toStrictEqual(status);
  });
});
