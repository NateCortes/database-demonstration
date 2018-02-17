const fs = require( 'fs');
const ejs = require( 'ejs');
const express = require( 'express');
const https = require( 'https');
const mongoose = require( 'mongoose');
const body_parser = require( 'body-parser');
const util = require( 'util');
const moment = require( 'moment');

const main = require( './routes/main');

const app = express();
const port = process.env.port || 3000;

app.set( 'view engine', 'ejs');

app.use( body_parser.urlencoded( {extended: true}));
app.use( body_parser.json());
app.use( '/assets', express.static( 'assets'));

app.use( '/', main);

app.get( '/test', ( req, res)=>{
    res.end( "testing");
});

app.listen( port, ()=>{
  console.log( "server accessed at " + moment( Date.now()).format( "M/D/YYYY, h:mm:ss a"));
});
