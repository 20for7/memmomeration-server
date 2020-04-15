const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const settings = require('./settings.json');
const commands = require("./commands").router;
const error = require('./middleware/error');
var app = express();


// allow access from other services
app.use(cors());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
// parse application/json
app.use(bodyParser.json({
    limit: '50mb'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));



//inclids the commands
app.use(express.json());
app.use('/api', commands);
// this middleware error function will activate after the routes above, by calling the next() function in the routes
app.use(error);




//init the server listen
var server = app.listen(settings.port, settings.ip, function () {
    var host = settings.ip;
    var port = settings.port;

    console.log("Server listening at http://%s:%s", host, port);
});