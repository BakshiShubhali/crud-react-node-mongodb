const mongoose = require('mongoose');

const schema = mongoose;

const userModel = new mongoose.Schema({
   email  : {
       type : String
   },
   userName : {
       type : String
   },
   password : {
       type : String
   }

})

module.exports = mongoose.model("USER",userModel)