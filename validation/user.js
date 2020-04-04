const {
  check
} = require('express-validator');
const checkErrors = require("../middlewares/checkErrors");

function validateCreateUser() {
  return [
    check('email', "'email' must not be empty").not().isEmpty(),
    check('email', "'email' must be example@example.com").isEmail(),
    check('role', "'role' must not be empty").not().isEmpty(),
    check('password', "'password' must not be empty").not().isEmpty(),
    check('password', "'password' length is not between 8 and 16 characters").isLength({min: 8, max: 16})
  ];
}

function validateUserBody(reqPath) {
  let validationMiddleware = [];

  switch (reqPath) {
    case 'user/':
      validationMiddleware = validateCreateUser();
      break;
  }

  validationMiddleware.push(checkErrors);
  return validationMiddleware;
}

module.exports = {
  validateUserBody
}