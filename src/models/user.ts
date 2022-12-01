export {}
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userschema = new Schema({
    email : {
        type : String ,
        required: true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum:['admin','user']
    }
},
{
    timestamps: true
})
userschema.statics.isEmailTaken = async function (email : String) {
    const user = await this.findOne({email : email});
    return !!user;
  };
module.exports=mongoose.model('User',userschema);