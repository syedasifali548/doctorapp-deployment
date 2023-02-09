const mongoose = require("mongoose");

//schema design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      // unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    isAdmin:{
      type:Boolean,
      default:false,
    },
    isDoctor:{
      type:Boolean,
      default:false,
    },
    notification:{
      type:Array,
      default:[]
    },
    seennotification:{
      type:Array,
      default:[]
    },
  });
  
  // { timestamps: true }
//export
module.exports = mongoose.model('users', userSchema)