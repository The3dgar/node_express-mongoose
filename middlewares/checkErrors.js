const {
  validationResult
} = require('express-validator');

function checkErrors(req, res, next) {
  const result = validationResult(req);

  if (result.isEmpty()) return next()

  res.status(200).json({
    success: false,
    message: result.array()
  });
}

module.exports = checkErrors;