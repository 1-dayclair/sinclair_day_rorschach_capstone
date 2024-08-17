const express = require("express");
const router = express.Router();
const newUserModel = require("../model/create");

router
    .route("/newuser")
    .post(async (req, res) => {
        const { email, username, password } = req.body;
        try {
            const newUser = new newUserModel({ email, username, password });

            await newUser.save(); 
            res.status(201).json({message: `New User @ ${newUser}`})

        } catch (error) {
            res.status(500).json({error: "There has been a server error, we are working on it, now!"});
            // console.error("ERRor!!", error);
            // res.status(500).json({ error: "SERVER ERROR" });
        }

    }); 

module.exports = router;