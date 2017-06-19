/*
 * QUOTE MODEL 
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create schema
var QuoteSchema = new mongoose.Schema({
    created: Date,
    note: String
});

//register schema as model
var Quote = mongoose.model('Quote', QuoteSchema);
