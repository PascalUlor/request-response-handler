import {
  handleResponse,
  OK,
} from '../../src/success';

describe('handleResponse', () => {
  it('should create custom response', () => {
    expect.assertions(1);
    const message = 'response message';
    const statusCode = OK;

    const mockJson = jest.fn().mockImplementation(() => ({
      success: true,
      statusCode,
      message,
    }));
    const mockStatus = jest.fn().mockImplementation(() => ({ json: mockJson }));
    const mockResponse = {
      status: mockStatus,
    };

    const res = handleResponse(mockResponse, statusCode, message);

    expect(res).toStrictEqual({ message: 'response message', statusCode: 200, success: true });

    jest.resetAllMocks();
  });

  it('should create custom response with body', () => {
    expect.assertions(1);
    const message = 'response message';
    const statusCode = OK;
    const mockData = { hello: 'world' };

    const mockJson = jest.fn().mockImplementation(() => ({
      success: true,
      statusCode,
      message,
      mockData,
    }));
    const mockStatus = jest.fn().mockImplementation(() => ({ json: mockJson }));
    const mockResponse = {
      status: mockStatus,
    };

    const res = handleResponse(mockResponse, statusCode, message, mockData);

    expect(res).toStrictEqual({
      message: 'response message', mockData: { hello: 'world' }, statusCode: 200, success: true,
    });

    jest.resetAllMocks();
  });
});
