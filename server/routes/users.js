const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const newUserModel = require("../model/create");
const userData = require("../data/users");

router
    .route("/webtraveller")
    .post(async (req, res) => {

        // const { username, password } = req.body;

        try {
            const { username, password } = req.body;

            const user = await newUserModel.findOne({ username });

            console.log("Quality Request!");
            
            if (!user) {
                return res.status(400).json({ error: "Username and/or password does not match our database, please try again!" });
            }

            const twin = await bcrypt.compare(password, user.password);
            if (!twin) {
                return res.status(400).json({ error: "Username and/or password does not match our database, please try again!" });
            }

            const secret = jwt.sign({ id: user._id },
                process.env.JWT_SECRET, { expiresIn: "2h" });
            res.json({ secret, message: "User now has access!" });

            // Did Not work
            // if (user && user.password === password) {
            //     console.log("Caught User!");
            //     res.render("rorschach");
            // } else {
            //     res.status(401).send("Username and/or password does not match our database files, please try again.");
            // } 
            // Did not work^^

        } catch (error) {
            console.error("ERRor", error);
            res.status(500).json({ error: "SERVER ERROR" });
        }

    });

router
    .route("/data")
    .get((req, res) => {
        res.json(userData)
    });

module.exports = router; 