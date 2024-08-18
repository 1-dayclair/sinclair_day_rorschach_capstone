const express = require("express");
const router = express.Router();
const newUserModel = require("../model/create");
const bcrypt = require("bcrypt");

router
    .route("/newuser")
    .post(async (req, res) => {

        const { email, username, password } = req.body;

        if (!email || !username || !password) {
            return res.status(400).json({error: "There is a rquired field that's missing from your entry"});
        }

        try {

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            console.log(salt);
            console.log(hashPassword);

            const newUser = new newUserModel({ email, username, hashPassword });

            await newUser.save();
            res.status(201).json({ message: `New User @ ${newUser}` })

        } catch (error) {
            console.log(error);
            if (error.code === 11000) {
                res.status(400).json({ error: "The email and/or username you've entered already exists inside our database. Please enter another username and/or email address or continue to the login page." })
            } else {
                res.status(500).json({ error: "There has been a server error, we are working on it now!" });
            }
        }

    });

module.exports = router;