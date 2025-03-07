const express = require("express");
const router = express.Router();

router
    .route("/communication")
    .post(async (req, res) => {

        const {message} = req.body;

        console.log("New Talk recieved:", message);

        res.json({ reply: "I got your message. Give me a bit of time  to reply. I may be out and about."});
    });

    module.exports = router