const express = require("express");
const router = express.Router();
const userModel = require("../model/users");


router
    .route("/webtraveller")
    .post(async (req, res) => {

        try {
            const { username, password } = req.body;

            console.log("Data has arrived :)", {username, password});

            const user = await userModel.findOne({username});

        } catch (error) {
            console.error("ERRor", error);
            res.status(500).json({ error: "SERVER ERROR" });
        }

    });

module.exports = router; 