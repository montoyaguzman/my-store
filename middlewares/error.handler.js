function errorLog(err, req, res, next) {
    console.log('errorLog...');
    console.log(err);
    next(err);
}

function handleError(err, req, res, next) {
    console.log('handleError...');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
}

function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    }
    next(err);
}
  

module.exports = { errorLog, handleError, boomErrorHandler }