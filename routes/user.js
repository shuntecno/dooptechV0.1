var express = require('express');
// const { param } = require('./testing');
var router = express.Router();

const users = {
  id : 1,
  nama : "asssw",
  umur : "fdfdff"
}


router.get('/:userId', function(req, res, next) {
  console.log(req.params);
  return res.send("ok"+req.params.userId);

});

router.get('/:userId/:id', function(req, res, next) {
  console.log(req.params);
  return res.send("ok"+req.params.userId+req.params.id);

});
/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.param);
  return res.json(users);

});

module.exports = router;
