var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

// kick off the mongoose database connection
require('./modules/database');

// passport strategy includes
var passport = require('./strategies/userStrategy');

// Route includes
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');

// create the app
var app = express();
var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false } // this session expires after 600 seconds without an interaction
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/** Routes **/
app.use('/register', register);
app.use('/user', user);

// handles redirect from passport login failure
app.use('/loginFailure', function(req, res) {
    res.sendStatus(403);
});

// handles login/registration post request
app.use('/', index);

/** Listen **/
app.listen(port, function(){
   console.log("Listening on port: " + port);
});
