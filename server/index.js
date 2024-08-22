const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path"); 
const cors = require("cors"); 

const app = express();
const PORT = 4000;

app.use(express.json());

app.use(cors({
    origin: "https://interglobal-circular.onrender.com", 
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
}));

// Middleware 
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
// Middleware^^

// Connection
async function main() {
    try {
    await mongoose.connect(process.env.ATLAS_URI );
    
    console.log("Database active!");

    } catch (err) {
        
        console.log("Database is not active..");
    }
};

main().catch(err => console.log(err));
// Connection^^

// Routes
// const  userModel = require("./model/users");
// const commentsModel = require("./model/comments");
// const createModel = require("./model/create"); 

const create = require("./routes/create");
app.use("/create", create);

const comments = require("./routes/comments");
app.use("/comments", comments);

const users = require("./routes/users");
app.use("/users", users)
// Routes^^

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

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