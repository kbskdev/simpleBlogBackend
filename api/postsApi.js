const express = require('express')
const router = express.Router()
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
    //console.log(req.query)
    //console.log(req.newQueries)
    console.log(req.body)
    next()
})
router.route("/").get(postsController.getAllPosts).post(postsController.addPost)
router.route("/icons/").get(postsController.getPostIcon)
router.route("/:id").get(postsController.getPost)
router.route("/lazyload/:skipped").get(postsController.getLazyPost)
router.route("/comments/:id").get(postsController.getComments).post(postsController.addComment)

module.exports = router
