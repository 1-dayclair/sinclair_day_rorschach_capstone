const express = require("express");
const router = express.Router();
const newUserModel = require("../model/users");
    

router
    .route("/newuser")
    .post(async (req, res) => {
        const { email, username, password } = req.body;
        try {
            const newUser = new newUserModel({ email, username, password });

            await newUserModel.save(); 
            res.status(201).json({message: `New User @ ${newUser}`})
            
            // const newUser = new newUserModel({
            //     email: req.body.email,
            //     username: req.body.username,
            //     password: req.body.password
            // });

            // const saveUser = await newUser.save();

            // res.send(`New User @ ${saveUser.username}!`);

        } catch (error) {
            res.status(500).json({error: "There has been a server error, we are working on it, now!"});
            console.error("ERRor!!", error);
            res.status(500).json({ error: "SERVER ERROR" });
        }

    }); 

router 
    .route("/delete/:email")
    .delete(async (req, res) => {
        const deleteOne = req.params.id;

        try {
            const vanish = await newUserModel.findByIdAndDelete(deleteOne);

            if(!vanish) {
                return res.status(404).json({error: "There is no user with that data to delete"});
            }
        } catch (error) {
            res.status(500).json({ message: "There has been an error deleting your information from the database, please try again."});
        }
    });

module.exports = router;