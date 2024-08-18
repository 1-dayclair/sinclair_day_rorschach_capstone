const express = require("express");
const router = express.Router();
const commentsModel = require("../model/comments");

router
    .route("/swordsofmagic")
    .post(async (req, res) => {

        const { username, comment, reply } = req.body;
        
    });

    

    module.exports = router; 