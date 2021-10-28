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

module.exports = { errorLog, handleError }