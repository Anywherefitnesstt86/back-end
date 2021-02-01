const express = require('express');
const router = express.Router();
const users = require("./users-model")
const restrict = require("../auth/restrict")


//.....get ... /user

router.get("/", restrict("instructor"), (req, res) => {
    users.getUsers()
    .then(users => {
        res.status(200).json(users)
    }) 
    .catch(err => {
        res.status(500).json({ message: "Cannot get user list." })
    })
})


// .....get .... /user/id .....


router.get("/:id", (req, res) => {
    users.getUsersByID(req.params.id)
    .then(users => {
       if(users){
           res.json(users)
       } else {
           res.status(404).json({ message: "There are no users that match that ID" })
       }
    })
    .catch(err => {
        res.status(500).json({message: "An error has occurred"})
    })
})


// .... put ... /user/id  .... 



router.put("/:id", (req, res) => {
    if (!req.body.personName || !req.body.email) {
        return res.status(400).json({
            message: "Missing personName or email",
        })
    }
    users.updateUsersByID(req.params.id, req.body)
    .then((user) => {
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: "The user could not be found", })
        }
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({
            message: "Error updating the user",
        })
    })
})

router.get("/logout", async (req, res, next) => {
    res.clearCookie("token");
    res.send("You have logged out")
})

module.exports = router;