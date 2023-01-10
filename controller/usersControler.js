const mongoose = require('mongoose')
const express = require("express")
const Model = require("../models/usersModels")
const jwt = require("jsonwebtoken")


exports.addUser = async(req,res)=>{
    try{
        const newUser = await Model.Users.create({username:req.body.username,password:req.body.password})
        const token = await jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES},{}).then({}).catch(err=>{throw err})

    }catch (err){
        res.status(500).json({
            status:"fail",
            err:err
        })
    }
}
