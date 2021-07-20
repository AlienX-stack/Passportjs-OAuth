const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/user");

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
    async (accessToken, refreshToken, profile, done) => {
      //Passport callback
      // console.log("Fired");
      // console.log(profile);
      const newUser = {
        googleId: profile.id,
        username: profile.displayName,
      };

      try {
        // Check if the user is already in the database
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          // console.log("User is already there");
          done(null, user);
        }
        // Add the User to the database if he is not present
        else {
          user = await User.create(newUser);
          // console.log("User Added Successfully");
          // console.log(user);
          done(null, user);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  // The id will be associated with the user of the database
  // Stuffing the id into a cookie
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  await User.findById(id, (err, user) => done(err, user));
});
