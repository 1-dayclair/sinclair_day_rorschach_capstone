const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const userModel = require("../model/create");


router
    .route("/webtraveller")
    .post(async (req, res) => {

        try {
            const { username, password } = req.body;

            console.log("Data has arrived :)", {username, password});

            const user = await userModel.findOne({username});

            // console.log(user);
            
            if (!user) {
                return res.status(400).json({ error: "Username and/or password does not match our database, please try again!" });
            }

            const twin = await bcrypt.compare(password, user.password);
            if (!twin) {
                return res.status(400).json({ error: "Username and/or password does not match our database, please try again!" });
            }

            const token = jwt.sign({ id: user._id },
                process.env.JWT_SECRET, { expiresIn: "2h" });
            
            const noEncryption = jwt.verify(token, process.env.JWT_SECRET);
                if (user._id.toString() === noEncryption.id) {
                    console.log("There's a match in our database!");
                }
            return res.status(200).json({ token, message: "User now has access!" });

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