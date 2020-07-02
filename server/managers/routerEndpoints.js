/**
 * A module for binding our managers to their http endpoints.
 *
 * @module managers/routerEndpoints
 */
const express = require('express');
const router = express.Router();

const middleware = require('../engines/middleware')
const users = require('../resource-access/users-static');
const passport = require('passport');
const cors = require('cors');

router.post("/api/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(400).send([user, "Cannot log in", info])
        }

        req.login(user, (err) => {
            res.send("Logged in")
        })
    })(req, res, next)
});

router.get('/api/logout', function (req, res) {
    req.logout();
    console.log("logged out")
    return res.send();
});

router.get("/api/user", middleware.authMiddleware, (req, res) => {
    let user = users.find((user) => {
        return user.id === req.session.passport.user
    })
    console.log([user, req.session])
    res.send({ user: user })
});

router.get('/auth/github', 
  passport.authenticate('github')
);

router.get('/auth/github/callback',  
  passport.authenticate('github', { failureRedirect: 'http://localhost:1234/#/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:1234/#/');
});


const allowedOrigins = ['http://localhost:1234',
    'http://localhost:1235',
    'https://rieger-learning.github.io/'];

router.use(cors({
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
}))

router.use(passport.initialize())
module.exports = router;