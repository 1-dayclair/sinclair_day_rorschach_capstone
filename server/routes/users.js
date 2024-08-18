const express = require("express");
const router = express.Router();
const userModel = require("../model/users");
const bcrypt = require("bcrypt");

router
    .route("/webtraveller")
    .post(async (req, res) => {

        const { username, password } = req.body;

        const user = await userModel.findOne({username});
            if(user == null) {
                return res.status(400).json("Cannot find user");
            }
            console.log("Data has arrived :)", {username, password});

        try {

            if (await bcrypt.compare(req.body.password, user.password)) {
                res.status(200).json({message: `Welcome @ ${user}`})
            } else {
                res.send("You are not authorized for that action.")
            }

        } catch (error) {
            console.error("ERRor", error);
            res.status(500).json({ error: "SERVER ERROR" });
        }

    });

module.exports = router; 