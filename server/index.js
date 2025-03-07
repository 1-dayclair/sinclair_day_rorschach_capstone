const express = require("express");
const https = require("https");
const { Server } = require("socket.io");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path"); 
const cors = require("cors"); 

const app = express();

const server = https.createServer(app);



const io = new Server(server, {
    cors: {
        origin: ["https://global-circular.onrender.com", "https://interglobal-circular.onrender.com", "https://localhost:5173"], 
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    },
    allowEIO3: false,
    transports: ["websocket", "polling"],
});

const PORT = 4000;

io.on("connection", (socket) => {
    console.log("A user connected!");

    socket.on("disconnect", () => {
        console.log("A user disconnected :(");
    });
});


app.use(express.json());

app.use(cors({
    origin: ["https://global-circular.onrender.com", "https://interglobal-circular.onrender.com", "https://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
}));

// Middleware 
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
// Middleware^^

app.use((req, res, next) => {
    if (req.accepts("html")) {
        res.set("Content-Type", "text/html");
    }
    next();
});

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

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Routes
const create = require("./routes/create");
app.use("/create", create);

const comments = require("./routes/comments");
app.use("/comments", comments);

const users = require("./routes/users");
app.use("/users", users);

const communication = require("./routes/communication");
app.use("/communication", communication);
// Routes^^

// 404 Middleware
app.use((req, res, next) => {
    res.status(404).send("Resource Not Found");
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