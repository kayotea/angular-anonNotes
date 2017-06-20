console.log('routes.js');
/*
 * VARIABLES
 */
var quotes = require('../controller/quotes.js'),
    path = require('path');

/*
 * ROUTES
 */
module.exports = function(app){
    console.log('reached routes.js');
    
    app.post('/newnote', function (req, res) {
        quotes.createNote(req, res);
    });
    //same as
    // app.post('/newnote', (req, res) => {
    //     quotes.createNote(req, res);
    // });
    app.get('/notes', function (req, res) {
        quotes.index(req, res);
    });
    app.all("*", function (req,res) {
        res.sendfile(path.resolve("./public/dist/index.html"));
    });
}