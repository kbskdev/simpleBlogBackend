const mongoose = require("mongoose")
const dotenv = require('dotenv')

const Model = require("./models/commentsModel")

dotenv.config({path:"./config.env"})

mongoose.connect(`${process.env.DATABASE}`,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false},).then(con=>{
    console.log("udalo sie polaczyc")
}).catch(err=>{console.log("jednak nie")})

const post = process.argv[2]
const commsNum = process.argv[3]

Model.Posts.findByIdAndUpdate({_id:`${post}`},{$set:{comments:[]}}).then(data=>{
    console.log(data)
})
