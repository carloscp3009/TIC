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
module.exports = router;