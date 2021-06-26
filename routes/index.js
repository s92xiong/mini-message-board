var express = require('express');
var router = express.Router();
const messages = require("../public/javascripts/messages");

const moment = require("moment");
const currentTime = moment().format();                         
const currentMoment = moment().startOf(currentTime).fromNow();

// GET home page for index
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages,
  });
});

// Add a router.get() for the "/new" route and point it to a template named "form".
router.get('/new', function(req, res, next) {
  res.render('form');
});

// (1) Send a POST request to the "/new" url specified by the action attribute
// (2) Access the contents of your form inside router.post() as an object called req.body
// (3) The fields inside the req.body obj are named according to the name attribute on your inputs
// (4) Take the contents of the form submission and push them into the messages array as an object
// (5) Send users back to the index page after submitting a new message

router.post("/new", function(req, res, next) {
  // console.log(req.body);
  messages.push({
    text: req.body.messageText, 
    user: req.body.messageUser, 
    added: currentMoment
  });
  res.redirect("/");
});

module.exports = router;
