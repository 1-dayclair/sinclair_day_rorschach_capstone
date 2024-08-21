const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path =require("path"); 

const cors = require("cors"); 

// Connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.ATLAS_URI)
};
const PORT = 4000;
// Connection^^

const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://global-circular.onrender.com", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
}));

// Middleware 
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
// Middleware^^

// Routes
const  userModel = require("./model/users");
const commentsModel = require("./model/comments");
const createModel = require("./model/create"); 

const create = require("./routes/create");
app.use("/create", create);
// const users = require("./routes/users");
// app.use("/users", users);
const comments = require("./routes/comments");
app.use("/comments", comments);

const users = require("./routes/users");
app.use("/users", users)
// Routes^^

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});


// Views
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use("/public/media", express.static("./public"));
// Views^^



// Start
app.get("/", async (req, res) => {
    res.render("start.ejs", { text: "Start!" });
    console.log("Start!")
});
// Start^^

// Sign Up
app.get("/newuser", (req, res) => {
    res.render("signUp.ejs");
    console.log("Potential Beautiful Movement!")
});
// Sign Up^^

// Login
app.get("/webtraveller", (req, res) => {
    res.render("login.ejs");
    console.log("Lovely. (In A Vaccum!)");
});
// Login^^

// Public Circular
app.get("/circular", (req, res) => {
    res.render("rorschach.ejs");
    console.log("Client is active on Public Circular!");
});
// Public Circular^^

// 404 Middleware
app.use((req, res, next) => {
    next(new Error(404, "Resource Not Found"));
});
// 404 Middleware^^

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).send("ERROR! Something is not working properly...");
});
// Error Handling Middleware^^

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});