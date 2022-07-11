const express = require('express')
const Article = require('../models/article')
const router = express.Router()


router.get('/article/:id',async (req,res) => {
    const QueryId = req.params.id
    try {
          const article = await Article.findOne({ _id:  `${QueryId}` })
          res.json(article)
    } catch(err){
        console.log(err)
    }
  })

  module.exports = router