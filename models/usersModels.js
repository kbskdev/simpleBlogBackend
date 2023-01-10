const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema  = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"there is already user with tha nick"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
    }
})

UserSchema.pre('save',async function (next){
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

const Users = mongoose.model('users',UserSchema)

exports.Users = Users
