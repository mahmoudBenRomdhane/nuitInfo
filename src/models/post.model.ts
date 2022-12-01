export {}
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postsSchema = new Schema({
    userName : {
        type : String ,
        required: true,
        default : "test"
    },
    content : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : false
    },
    isPublished : {
        type : String,
        required : false,
        default : false
    }
},
{
    timestamps: true
})

module.exports=mongoose.model('Post',postsSchema);