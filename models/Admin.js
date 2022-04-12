const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const schema = new Schema(
    {
        name:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true
        },
        mobileno:{
            type:String,
            required:true
        },

        password:{
            type:String,
            required:true
        }
    }
) 
const Admin = mongoose.model("admin",schema);
module.exports = Admin;