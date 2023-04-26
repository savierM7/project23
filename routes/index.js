var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/card', function(req,res){
  console.log(req.body.date0fBirth)
  res.render('card',{
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    date0fBirth: new Date(req.body.date0fBirth),
    addressLine1:req.body.addressLine1,
    addressLine2:req.body.addressLine2,
    city: req.body.City,
    state: req.body.State,
    zip: req.body.Zip,
    accountNumber: createAccountNumber(),
    //if you create a new Date with no value, it automatically uses today's date!
    currentDate: new Date()
  });
})
module.exports = router

function createAccountNumber(){
  let accNum = ""
  for (let 1 = 0; i<5; i++){
    let temp = math.floor(Math.random()*10);
    accNum += temp;
  }
  return accNum;
}