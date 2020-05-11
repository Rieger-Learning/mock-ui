let users = require('../resource-access/users-static');

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy;

// Github Strategy
const GitHubStrategy = require('passport-github2').Strategy;
const secret = require('../secret-config');


class PassportBinding {
    constructor(){
        this.githubUsers = [];
    }
    bindAll(passport) {
        this.localStrategy(passport);
        this.githubStrategy(passport);
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

    githubStrategy(passport) {
        passport.use(new GitHubStrategy({
            clientID: secret.github_client_id,
            clientSecret: secret.github_secret_id,
            callbackURL: "http://127.0.0.1:1235/auth/github/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            
            this.githubUsers.push(profile);
            console.log('user pushed');

            //passport.serializeUser(profile);

            done(null, profile)
        }
        ));
    }

    serialize(passport) {
        passport.serializeUser((user, done) => {
            done(null, user);
        });    
    }

    deserialize(passport) {
        passport.deserializeUser((id, done) => {
            let user = users.find((user) => {
                return user.id === id;
            });

            if (!user) {
                //This needs to go to an external storage like redis. 
                user = this.githubUsers.find((user) => {
                    return user.id === id;
                });
            }

            done(null, user);
        });    
    }
} 


module.exports = new PassportBinding();