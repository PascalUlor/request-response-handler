# request-response-handler

**ABOUT** This is a very basic HTTP response handler for NodeJS application. 

# Table Of Content

1. [Getting Started](#getting-started 'Getting Started')
   .._[Installation](#installation 'Installation')
2. [Usage](#usage 'Usage')
3. [Built With](#built-with 'Built With')
4. [Useful Links](#useful-links 'Useful Links')
5. [Improvements](#improvements 'Improvements')

## Getting Started

These instructions will get you started on using the package


### Installation

```
npm install --save request-response-handler
```

## Usage
This package supports both ES6 and commonjs syntax

### Basic statusCodes

You can import some http statusCodes often used in projects:

**Example**
```js
const {
  CREATED, //201
  OK, // 200
  BAD_REQUEST, // 400
  CONFLICT, // 409
  NOT_FOUND, // 404
  SERVER_ERROR, // 500
  UNAUTHORIZED, // 401
  FORBIDDEN, // 403
} = require('request-response-handler');
```

### errorHandler
Pass the `errorHandler` as a middleware to catch all errors in your app
**Example**

```js
const { errorHandler } = require('request-response-handler');

app.use(errorHandler());

```

### customError
Use `customError` to catch errors and return custom error messages in your app

**Example**

```js
const { customError, CONFLICT } = require('request-response-handler');
/**
  * Create new error
  *
  * @param {String} message
  * @param {number} status
  *
  * @returns {object} error
  */

    createError({
        status: CONFLICT,
        message: 'User with email or username already exists',
    }),

```

### success

**Example**
handle 2XX responses with custom messages and response objects
```js
const { success CREATED, OK} = require('request-response-handler');

/**
  *Create success response data format
  *
  * @param {object} res
  * @param {object} statusCode
  * @param {string} [message='successful']
  * @param {object} body // optional
  * @return {object}
  */
    success(res, CREATED, 'SignUp Successful', {
          id: user.id, username, email, token, apiKey: user.apiKey,
        });
```


## Authors

- **Ulor Pascal** - [PascalUlor](https://github.com/PascalUlor)