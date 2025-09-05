const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// Login Route
app.get("/login", (req, res) => {
    res.render("login.ejs");
});

// Signup Route
app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});

// Main Page Route
app.get("/satyayuga", (req, res) => {
    res.render("mainpage.ejs");
})

// DashBoard Route
app.get("/dashboard", (req, res) => {
    res.render("dashboard.ejs");
})

// Setting or Profile Route
app.get("/profile", (req, res) => {
    res.render("profile.ejs");
})

// Page not found
app.use((req, res) => {
    res.render("err.ejs");
})

app.listen(port, () => {
    console.log("Server is Listening");
});