const express = require("express");
const router = express.Router();
const newUserModel = require("../model/create");
const bcrypt = require("bcrypt");

router
    .route("/newuser")
    .post(async (req, res) => {

        const { email, username, password } = req.body;

        console.log(req.body);

        try {

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            console.log(salt);
            console.log(hashPassword);

            const newUser = new newUserModel({ email, username, hashPassword });

            await newUser.save();
            
            console.log("New user input into database!");

            res.status(201).json({ message: `New User @ ${username}` });

        } catch (error) {

            console.log(error)

                res.status(500).json({ error: "There has been a server error. We are working on it now!" });
        }

    });

module.exports = router;