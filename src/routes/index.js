const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/selection', (req,res)=> {
  res.render('selection')
});
module.exports = router;