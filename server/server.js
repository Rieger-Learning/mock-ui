//TODO: Clean this up. Break into seperate modules.
//TODO: Make Passport more modular so new auth types are easy. 

const express = require('express');

// creating an express instance
const app = express();

const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');

//We talk in JSON for the body. 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/**************************************************
 * This is the passport section
 *************************************************/
//This tells us to use Cookie session storage on the client. 
// express-session allows us to move to server side. 
//It basically only saves a UUID and then forces a look up. 
//Cool but not what we need right now. 
app.use(cookieSession({
    name: 'RiegerLearning',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours 
}));

const allowedOrigins = ['http://localhost:1234',
    'http://localhost:1235',
    'https://rieger-learning.github.io/'];
    
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(passport.initialize());
app.use(passport.session());

 //Bind to our managers. 
 const RouterEndpoint = require('./managers/routerEndpoints.js');
 app.use(RouterEndpoint);

//Apparently passport is a singleton.. this coule be cleaned up.
const PassportBinding = require('./engines/passportBinding');
PassportBinding.bindAll(passport);

/*************************************************
 * This ends the passport section
 *************************************************/

 app.listen(1235, () => {
    console.log("Example app listening on port 1235")
});