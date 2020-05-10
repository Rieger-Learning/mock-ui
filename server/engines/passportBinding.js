const users = require('../resource-access/users-static');

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy;

class PassportBinding {
    bindAll(passport) {
        this.localStrategy(passport);
        this.serialize(passport);
        this.deserialize(passport);
    }
    
    localStrategy(passport) {
        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
            (username, password, done) => {
                let user = users.find((user) => {
                    return user.email === username && user.password === password;
                })
        
                if (user) {
                    done(null, user);
                } else {
                    done(null, false, { message: 'Incorrect username or password' });
                }
            }
        ));        
    }

    serialize(passport) {
        passport.serializeUser((user, done) => {
            done(null, user.id);
        });    
    }

    deserialize(passport) {
        passport.deserializeUser((id, done) => {
            let user = users.find((user) => {
                return user.id === id;
            });
        
            done(null, user);
        });    
    }
} 


module.exports = new PassportBinding();