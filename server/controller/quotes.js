/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {
    index: function(req, res){
        Quote.find({})
        .then(data => {
            console.log('success in quotes.js/findNotes()');
            res.json(data);
        })
        .catch(err => {
            console.log('error in quotes.js/findNotes()');
            res.json(err);
        })
    },
    createNote: function(req, res){
        var note = new Quote({created: req.body.created, note: req.body.note});
        note.save(note)
        .then(data => {
             console.log('success in quotes.js/createNote()');
             res.json(data);
        })
        .catch(err => {
            console.log('error in quotes.js/createNote()');
            res.json(err);
        })
    }
}