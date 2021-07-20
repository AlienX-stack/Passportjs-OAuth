const router = require("express").Router();

// Creating a middleware
// check whether the user is logged in to view his profile
const authCheck = (req, res, next) => {
  if (!req.user) {
    //   If user is not logged in
    res.redirect("/auth/login");
  } else {
    //   If logged in then move to the next function
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  res.send(`${req.user.username}, You have logged in successfully`);
});

module.exports = router;
