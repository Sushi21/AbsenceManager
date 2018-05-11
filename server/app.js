var express = require('express');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
var app = express();
var smartsheet = require('./smartsheet');

//Config
app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Routes
app.get('/events', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'supersecretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            var data = smartsheet.listSheets;
            res.json({
                data
            });
        }
    });
});

app.post('/login', (req, res, next) => {
    if(req.body.password == 'test'){
         // Mock User
    const user = {
        Id: 1,
        Username: 'admin',
        email: 'brad@gmail.com'
    }
    
    jwt.sign({user}, 'supersecretkey', {expiresIn: '30s'}, (err, token) => {
        res.json({
            tokenString: token,
            user
        });
    });
    console.log(req);
    } else {
      res.sendStatus(403);
    }
   
});

//Format of Token
//Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    //Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        //Split at the space
        const bearer = bearerHeader.split(' ');
        // Get Token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        //Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.listen('3500', 'localhost', function(){
    console.log('app is running');
});