var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  console.log('get /user route');
  // check if logged in
  if(req.isAuthenticated()) { // req.isAuthenticated() ensures the user is logged in
    // send back user object from database
    console.log('logged in');
    var userInfo = {
      username : req.user.username // req.user comes from passport, means we don't have to trust req.body any more
    };
    res.send(userInfo);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});


module.exports = router;
