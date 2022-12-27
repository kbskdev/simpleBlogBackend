const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    author:{
        type:String,
        required:[true,"author is required"]
    },
    text:{
        type:String,
        required:[true,"comment cant be empty"]
    },
    date:{
        type:Date
    },
    votes:{
        type:Number,
        default:0
    }
})

const postsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    author:{
        type:String,
        required:[true,"author is required"]
    },
    text:{
        type:String,
        required:[true,"comment cant be empty"]
    },
    date:{
        type:Date
    },
    votes:{
        type:Number,
        default:0
    },
    comments:[commentsSchema]
})

const Comment = mongoose.model('comment',commentsSchema)
const Posts = mongoose.model('posts',postsSchema,'Posts')

exports.Comment = Comment
exports.Posts = Posts



