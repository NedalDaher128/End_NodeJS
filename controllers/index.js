const Article = require('../models/articleSchema')

const test1 = (req, res) => {
    Article.find()
      .then(result => {
        console.log(result); 
          res.render('index' , {array:result})
     
      })
      .catch(err => {
        console.log(err);
      })
  }

const test2 =(req ,res)=>{
    Article.findByIdAndDelete(req.params.id)
  .then(result => {
    res.redirect("/index")
  
  })
  .catch(err => {
    console.log(err);
  })
  }

const test3 =  (req,res) =>{
    Article.findById(req.params.id)
    .then(result => {
      console.log(result); 
        res.render('details' , {database:result})
    
    })
    .catch(err => {
      console.log(err);
    })
    }
const test4 = (req, res) => {
    const article = new Article({
      title: req.body.title,
      summary: req.body.summary,
      body: req.body.body
    
    }).save()
      .then(result => {
        res.redirect('/index')
      })
      .catch(err => {
        console.log(err);
      })
    }
module.exports = {test1, test2 ,test3,test4}