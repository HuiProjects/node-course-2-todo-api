var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
  text:{
    required:true,
    trim:true,
    type:String,
    minlength:1
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

var Todo = mongoose.model('Todo', todoSchema);

var newTodo= new Todo({
text:"something to do"
});

// newTodo.save(function(err,result){
//   if(err){
//     return console.log(err);
//   }else{
//     console.log(result);
//   }
// })
module.exports = {
  Todo: Todo
}
