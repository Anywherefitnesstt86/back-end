const express = require('express');
const { addClass } = require('./classes-model');
const router = express.Router();
const classes = require("./classes-model")

//GET Classes     /classes
router.get("/", (req, res) => {
    classes.getClasses()
    .then(classes => {
        res.status(200).json(classes)
    }) 
    .catch(err => {
        res.status(500).json({ message: "Cannot get fitness class list." })
    })
})

//GET Classes BY ID    /classes/id
router.get("/:id", (req, res) => {
    classes.getClassesByID(req.params.id)
    .then(classes => {
       if(classes){
           res.json(classes)
       } else {
           res.status(404).json({ message: "There are no classes that match that ID" })
       }
    })
    .catch(err => {
        res.status(500).json({message: "An error has occurred"})
    })
})

//UPDATE Classes BY ID     /classes/id
router.put("/:id", (req, res) => {
    if (!req.body.className || !req.body.classType) {
        return res.status(400).json({
            message: "Missing class name or class type",
        })
    }
    classes.updateClassesByID(req.params.id, req.body)
    .then((classes) => {
        if(classes) {
            res.status(200).json(classes)
        } else {
            res.status(404).json({ message: "The class could not be found", })
        }
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({
            message: "Error updating the class",
        })
    })
})

//ADD OR CREATE Classes, ID IS AUTOINCREMENTING     /classes
router.post('/', async (req,res, next) => {
     try {
		const data = await classes.addClass(req.body)
		res.status(201).json(data)
	} catch(err) {
		next(err)
	}
})

//DELETE Classes BY ID   /classes/id
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    classes.removeClass(id).then(deleted => {
        if(deleted){
            res.json({removed: deleted})
        }else{
            res.status(404).json({message: 'no class matching that ID exists'})
        }
    }).catch(err => {
        res.status(500).json({ message: 'an error has occurred' });
      });
})

module.exports = router;