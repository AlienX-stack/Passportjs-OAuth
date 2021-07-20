const path = require("path");
const auth = require("./routes/auth");
const profileAuth = require("./routes/profile");
const express = require("express");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const connectDB = require("./config/db");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

const app = express();

// Connect to MongoDB
connectDB();

// Setup view engine
app.set("view engine", "ejs");

// Setup cookie session
// Age is day in ms
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Setup Routes
app.use("/auth", auth);
app.use("/profile", profileAuth);

// Create home route
app.get("/", (req, res) => {
  res.render("home", { user: req.user });
});

// Static folder
app.use(express.static(path.join(__dirname, "static")));

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
