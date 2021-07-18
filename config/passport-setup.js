const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");

// Saying passport that we are going to use GoogleStrategy

// params (new GoogleStrategy,callback)
// Setup the credentials and enabled the api online
passport.use(
  new GoogleStrategy(
    {
      // Options for google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    () => {
      //Passport callback
    }
  )
);
