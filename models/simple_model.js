const mongoose = require( "mongoose");

var thing_schema = new mongoose.Schema( {
  thing: String,
  time: String
});

module.exports = mongoose.model( 'thing', thing_schema);
