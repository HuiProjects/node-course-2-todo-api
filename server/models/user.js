var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  email:{
    required:true,
    trim:true,
    type:String,
    minlength:1
  }
});

var User = mongoose.model('User', userSchema);

var newUser= new User({
  email:"hhwgb59@live.com"
});

// newUser.save(function(err,result){
//   if(err){
//     return console.log(err);
//   }else{
//     console.log(result);
//   }
// })


module.exports = {
  User: User
}
