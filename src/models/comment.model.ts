export {}
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userName : {
        type : String ,
        required: true,
        default : "test"
    },
    post : {
        type: mongoose.Schema.Types.ObjectId,
        required :true,
        ref: 'Post'
    },
    content : {
        type : String,
        required : true
    }
},
{
    timestamps: true
})

module.exports=mongoose.model('Comment',commentSchema);