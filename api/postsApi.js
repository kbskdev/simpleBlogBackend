const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Comment = require("../models/commentsModel")
const postsController = require('../controller/postsController')

router.param('id',(req,res,next)=>{
    //console.log(req.params.id);
    next()
})
router.use((req, res, next) => {
    // req.newQueries = JSON.parse(
    //     JSON.stringify({...req.query})
    //         .replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
    // )
    const excludedQueries = ['sort']

    req.newQueries = req.query;
    excludedQueries.forEach(el=> delete req.newQueries[el])
    console.log(req.query)
    console.log(req.newQueries)
    next()
})
router.route("/icons/").get(postsController.getPostIcon)
router.route("/:id").get(postsController.getPost)
router.route("/").get(postsController.getAllPosts).post(postsController.addPost)
router.route("/comments/:id").get(postsController.getComments).post(postsController.addComment)

module.exports = router
