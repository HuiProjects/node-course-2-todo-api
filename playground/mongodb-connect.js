// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    return console.log(err);
  }
  console.log('Connected to MongoDb server');



  // db.collection('Todos').insertOne({
  //   rext:'something to do',
  //   completed:false
  // }, (err,result)=>{
  //   if(err){
  //   return  console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Hui Hao',
  //   age: 27,
  //   location: '4337 s Metallic way, boise, idaho'
  // },(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  db.close();
});
