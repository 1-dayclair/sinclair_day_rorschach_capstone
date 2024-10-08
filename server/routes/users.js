const express = require("express");
const router = express.Router();
const userModel = require("../model/create");
const bcrypt = require("bcrypt");

router
    .route("/webtraveller")
    .post(async (req, res) => {

        const { username, hashPassword } = req.body;

        const user = await userModel.findOne({username});
            if(user === null) {
                return res.status(400).json({error: "Cannot find user"});
            }
            console.log("Data has arrived :)", {username, hashPassword});

        try {

            if (await bcrypt.compare(req.body.hashPassword, user.hashPassword)) {
                res.status(200).json({message: `Welcome @ ${username}`})
            } else {
                res.send("You are not authorized for that action.")
            }

        } catch (error) {
            console.error("ERRor", error);
            res.status(500).json({ error: "SERVER ERROR" });
        }

    });

module.exports = router; 