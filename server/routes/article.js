const bodyParser = require('body-parser');
const express = require('express')
const router = express.Router()
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
const path = require('path');
router.use(express.static('public'));
router.use(express.static('../public/uploads'));
const multer = require('multer');
const Article = require('../models/article');
const Category = require('../models/category');


const storage = multer.diskStorage({
    destination: path.join(__dirname, '..' + '/public/uploads'),
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  function checkFileType(file, cb){
    // Allowed extension name
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
  }

const upload = multer({
    storage: storage,
    limits:{fileSize: 24 * 1000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  }).single('thumbnail')

router.get('/', async (req,res) => {
    try{
        const articles = await Article.find();
    // converting html content to plain text
        for(let i = 0; i< articles.length; i++){
            articles[i].content = articles[i].content.replace(/<[^>]*>?/gm, ' ');
            articles[i].content = articles[i].content.replace(/&nbsp;/g, ' ')
            articles[i].content = articles[i].content.substring(0,80);
        }
      res.json(articles)
    } catch(err){
        console.log(err)
    }
})

router.get('/category', async (req,res) => {
  const category = await Category.find()
   res.json(category)
})

router.post('/add-category',async (req,res) => {
    try {
        const category = await Category.find({name: req.body.category})
        const name = req.body.category
        if(category.length === 0){
            const newCategory = Category({
                name
            })
            newCategory.save().then(result => {
            return res.json({msg:'Added Category'});
            })
        } else {
            return res.json({msg: 'Already Exists'});
        }
    } catch(err){
        console.log(err)
    }
})

router.get('/dashboard',async (req,res) => {
    try{
      const article_number = await Article.find().count()
      const category_number = await Category.find().count()

      res.json({
        article_number,
        category_number
      })
    } catch(err){
      console.log(err)
    }
})


router.post('/add',(req, res)=>{
    upload(req,res, (err) => {
        if(err){
            console.log(err);
          } else {
            if(req.file == undefined){
              console.log('undefined file')
            } else {
                  let blog = req.body.body;
                  blog = blog.replace(/<[^>]*>?/gm, ' ');
                  blog = blog.replace(/&nbsp;/g, ' ')
                  const newPost = Article({
                      title: req.body.title,
                      content: blog,
                      category_id: req.body.category,
                      keywords: req.body.keywords,
                      image: req.file.filename
                  })
              newPost.save(()=>{
                console.log('saved')
              })
            }
        }
        res.redirect('http://localhost:3000/admin')
    })
});

router.post('/delete/:id', async (req,res) => {
  const QueryId = req.params.id
    try {
         const del =  await Article.deleteOne({ _id:  `${QueryId}` })
         console.log('deleted')
          return res.json({msg: 'deleted',items: del.deletedCount})
    } catch(err){
        console.log(err)
    }
    res.redirect('http://localhost:3000/admin')
})

module.exports = router;