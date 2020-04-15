const winston = require('winston');

module.exports = function (err, req, res, next) {

    // types of writing a log:
    // error
    // warn
    // info
    // verbose 
    // debug
    // silly

    winston.error(err);
    res.status(500).send(err.message);
}