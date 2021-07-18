const path = require("path");
const auth = require("./routes/auth");
const express = require("express");

const app = express();

// Set up view engine
app.set("view engine", "ejs");

// Setup Routes
app.use("/auth", auth);

// Create home route
app.get("/", (req, res) => {
  res.render("home");
});

// Static folder
app.use(express.static(path.join(__dirname, "static")));

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
