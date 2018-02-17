const express = require( 'express');
const mongoose = require( 'mongoose');
const util = require( 'util');
const moment = require( 'moment');

const router = express.Router();
const mongodb_model = require( '../models/simple_model.js');

//Mongodb server key
mongoose.connect( 'mongodb://test:run@ds225028.mlab.com:25028/crud_demo', ( err)=>{
  if( err) throw err;
  console.log( "connected to DB");
});

router.get( '/', ( req , res)=>{
    //grabs all doucments from the database
    mongodb_model.find( {}, 'thing time', ( err, things)=>{
      if( err) throw err;
      var thing_list = [];
      things.forEach( (thing)=>{
        thing_list.push( thing);
      });
      //then renders them with the express view engine
      res.render( 'landing_page', {list : thing_list} );
    });

});

router.post( '/', ( req, res)=>{

    if( req.body.type === "create"){
      console.log( "create");
      var obj = {
        thing: req.body.thing_name.trim(),
        time: moment( Date.now()).format( "M/D/YYYY, h:mm:ss a")
      };
      //adds a document into the database
      mongodb_model.create( obj, ( err)=>{
          if( err) throw err;
      });
    }

    if( req.body.type === "update"){
      console.log( "update");
      var key_value = req.body.thing_time;
      var update_value = req.body.thing_name;
      //searches and updates a document in the database
      mongodb_model.findOneAndUpdate({ time : key_value}, { thing : update_value} , ( err)=>{
          if( err) throw err;
      });
    }
});

router.delete( '/', ( req, res) =>{
  var delete_value = req.body.thing_name;
  console.log( "deleting " + delete_value);
  //Destroys a docuemnt from the database
  mongodb_model.remove( { _id : delete_value}, ( err)=>{
    if( err) throw err;
  });
});


module.exports = router;
