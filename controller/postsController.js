const mongoose = require('mongoose')
const Model = require("../models/commentsModel")



exports.getPost = async(req,res)=>{
    try{
        console.log(req.params.id)
        Model.Posts.findById(req.params.id).then(data=>{
            res.status(200).json({
                status:"succes",
                data:Array(data)
            })
        }).catch(err=>{
            res.status(500).json({
                status:"fail",
                err:err
            })
        })
    }catch (err){console.log("jakis nieoczekiwany blad")}
}


exports.addPost = async(req,res)=>{
    try{
        Model.Posts.create({title:req.body.title,author:req.body.author,text:req.body.text,date:Date()}).then(data=>{
            res.status(200).json({
                status:"succes",
                data:data
            })
        }).catch(err=>{
            res.status(500).json({
                status:"fail",
                err:err
            })
        })
    }catch (err){console.log("jakis nieoczekiwany blad")}
}

exports.getPostIcon = async(req,res)=>{
    try{
        Model.Posts.find().then(data=>{
                resData = []
                data.forEach(row=>{
                    resData.push({_id:row._id,title:row.title,author: row.author,date:row.date,votes:row.votes})
                })

            res.status(200)
                .json({
                    status:"succes",
                    data:resData
                })
        }).catch(err=>{
            res.status(500).json({
                status:"fail",
                err:err
            })
        })
    } catch (err){console.log("blad")}
}

exports.getAllPosts = async(req,res)=>{
    try {
      Model.Posts.find(req.newQueries).then(data=>{
          res.status(200).json({
              status:"succes",
              data:data
          })
      }).catch(err=>{
          res.status(500).json({
              status:"fail",
              err:err
          })
      })
    }catch (err){console.log("jakis nieoczekiwany blad")}
}

exports.getComments = async(req,res)=>{
    try{
        Model.Posts.findById(req.params.id).then(data =>{
            res.status(200).json({
                status:"succes",
                data:data.comments
            })
        }).catch(err=>{throw err})
    }catch (err){
        res.status(500).json({
            status:"fail",
            err:err
        })
    }

}

exports.addComment = async (req,res)=>{
    const newComments = req.body
    newComments.date = Date()
    try {
        Model.Posts.findByIdAndUpdate(req.params.id,{
            $push:{comments:{
                    author:newComments.author,
                    text:newComments.text,
                    date:newComments.date
            }}
        }).then(data=>{
            res.status(200).json({
                status:"success",
                data:data
            })
        }).catch(err=>{res.status(500).json({
            status:"fail",
            err:err
        })})
    }catch (err){
        res.status(500).json({
            status:"fail",
            err:err
        })
    }
}
