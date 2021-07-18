const router = require("express").Router();

// Auth Login
// GET /auth/login
router.get("/login", (req, res) => {
  res.render("login");
});

// Auth with google
// GET /auth/google
router.get("/google", (req, res) => {
  // Handled with passport
  res.send("Logging in with Google");
});

// Auth logout
// GET /auth/logout
router.get("/logout", (req, res) => {
  // Handled with passport
  res.send("Logging out with Google");
});

module.exports = router;
