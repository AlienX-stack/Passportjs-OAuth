const router = require("express").Router();
const passport = require("passport");

// Auth Login
// GET /auth/login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

// Auth with google
// GET /auth/google
// Scope property tells passport what to retrieve from the users profile and so we pass the profile in an array
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// Auth logout
// GET /auth/logout
router.get("/logout", (req, res) => {
  // Handled with passport
  // res.send("Logging out with Google");
  req.logout();
  res.redirect("/");
});

// Callback route for google to redirect to
// Here passport knows that the router has already been to the consent form
// So it contains the info in the code which needs to be redirected
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // res.send("You reached the callback URI");
  // Sending an response with currently logged in user
  // res.send(req.user);

  res.redirect("/profile/");
});

module.exports = router;
