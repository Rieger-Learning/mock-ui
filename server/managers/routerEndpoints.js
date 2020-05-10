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

module.exports = router;