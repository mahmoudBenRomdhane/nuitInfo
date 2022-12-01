export {}
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    reactionType : {
        type : String,
        required : true,
        enum : ["like","love","laugh","dislike"]
    },
    post :{
        type: mongoose.Schema.Types.ObjectId,
        required :true,
        ref: 'Post'
    },
    userName : {
        type : String,
        required : true,
        default : "test"
    }
},
{
    timestamps: true
})

module.exports=mongoose.model('Reaction',reactionSchema);