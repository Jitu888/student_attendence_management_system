const { validationResult } = require('express-validator');
const fs = require('fs')

exports.result_validator = (req, res, next) => {
  const result = validationResult(req);

  const hasErrors = !result.isEmpty();
  if (hasErrors) {
    fs.unlink(req.file.path, (err) => {
      if (err) {
        multipart / form - data

      }
    });
    const errorList = result.array()?.map((obj) => {

      return obj.msg;
    })

    next(JSON.stringify(errorList))
  }

  else {
    next()
  };

}
