'use strict';
// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    return console.log(err);
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').find({
  //   _id:new ObjectID('589b6d6342f81fa81b2cffa1')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=>{
  //   console.log('worng....',err);
  // });
  //



  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(count);
  //
  // }, (err)=>{
  //   console.log('worng....',err);
  // });

db.collection('Users').find({name:'Hui Hao'}).toArray().then((items)=>{
  console.log(JSON.stringify(items));
},(err)=>{
  console.log(err);
});

db.collection('Users').find({name:'Hui Hao'}).count(function(err,count){
    if(err){
      return console.log(err);
    }
    console.log(count);
});


  // db.close();
});
