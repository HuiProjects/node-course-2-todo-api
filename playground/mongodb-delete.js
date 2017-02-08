'use strict';
// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    return console.log(err);
  }
  console.log('Connected to MongoDb server');

  //deleteMany
  // db.collection('Todos').deleteOne({text:'walk the dog'}).then((result)=>{
  //   console.log(result);
  // })

  //findOneAndDelete

//   db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>
// console.log(res));

  // db.close();

  //
  // db.collection('Users').deleteMany({name: "Hui Hao"}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id:new ObjectID('589b6572e26d01bf78347aa9')}).then((result)=>{
    console.log(result);
  })


});
