const express = require("express");
const router = express.Router();
const commentsModel = require("../model/comments");

router
    .route("/swordsofmagic")
    .post(async (req, res) => {

        const { username, comment, reply } = req.body;
        
        try {
            const spirit = await commentsModel.findOne();

            if(!spirit) {
                commentsModel = new commentsModel({comments: []})
            }

            spirit.comments.push({username, comment, reply});
            await spirit.save();

            res.send(`${username} says ${comment}`);
            console.log(`Brand new talk from ${username}!`);
            
        } catch (error) {
            console.error("ERRor", error);
            res.status(500).json({ error: "SERVER ERROR" });
        }
    });

    module.exports = router; 