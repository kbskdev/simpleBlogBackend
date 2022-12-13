const app = require("./app")
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:"./config.env"})


mongoose.connect(`${process.env.DATABASE}`,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false},).then(con=>{
    console.log("udalo sie polaczyc")
}).catch(err=>{console.log("jednak nie")})

app.listen(8000,()=>{
    console.log("serwer slucha")
})
