const express = require('express')
const app = express()
const port = 8080
const IndexHomePosts = require("./routes/index")
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://maynkraftalhosni:reem123123@cluster0.ivva45d.mongodb.net/?retryWrites=true&w=majority")
  .then(result => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })


  })
  .catch(err => {
    console.log(err);
  });


app.get('/', (req, res) => {
  res.redirect('/index')
})

// index path
app.use(IndexHomePosts)
app.get('/add_post', (req, res) => {
  res.render('add_post')
})


