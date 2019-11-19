const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/selection', (req,res)=> {
  res.render('selection')
});
router.get('/plastic', (req,res)=> {
  res.render('plastic')
});
router.get('/paper', (req,res)=> {
  res.render('paper')
});
router.get('/glass', (req,res)=> {
  res.render('glass')
});
router.get('/organic', (req,res)=> {
  res.render('organic')
});
router.get('/thanks/:img', (req,res)=> {
  let img = req.params.img;
  res.render('thanks',{img})
});
router.get('/congrats', (req,res)=> {
  res.render('congrats')
});
router.get('/signin', (req,res)=> {
  res.render('signin')
});
router.get('/signup', (req,res)=> {
  res.render('signup')
});
router.post('/signin', (req,res)=> {
  res.render('selection')
});
router.post('/signup', (req,res)=> {
  res.render('selection')
});

module.exports = router;