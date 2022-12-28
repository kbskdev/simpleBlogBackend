const mongoose = require("mongoose")
const dotenv = require('dotenv')

const Model = require("./models/commentsModel")

dotenv.config({path:"config.env"})

mongoose.connect(`${process.env.database}`,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false}).then(con=>{
    console.log("polaczono")
}).catch(()=>{console.log("nie udalo sie")})

const post = process.argv[2]
const commsNum = process.argv[3]

Model.Posts.findByIdAndUpdate({_id:"638e7fa64baa1421bc9aaeea"},{$set:{comments:[]}}).then(data=>{
    console.log(data)
})
