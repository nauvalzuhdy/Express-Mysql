const logRequest = (req, res, next) => {
    console.log('Request to the PATH: ', req.path);
    next();
}

module.exports = logRequest;