const express = require('express')
const router = express.Router()
const db = require('../controllers/subscriber.controller')
const middleware = require('../middleware/subscriber.middleware')





//register a new subscriber
router.post('/subscriber/register',middleware.checkEmailExist, async (req, res, next) =>{
    try{
        let results = await db.register(req.body)
        if(results.affectedRows > 0)
            res.json({ message: "Register successfull!"})
        else
            res.json({ message: 'Something wrong!'})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

//subscriber login
router.post('/subscriber/login', async (req, res, next) =>{
    try{
        let results = await db.login(req.body)
        if(results.length > 0)
            res.status(200).json({ message: "Login successfull!"})
        else
            res.status(400).json({ message: 'Invalid credintial!'})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

//get all subscribers
router.post('/subscriber/all', async (req, res, next) =>{
    try{
        let results = await db.all()
        res.json(results)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

//get specific subscriber
router.post('/subscriber/:id', async (req, res, next) =>{
    try{
        let results = await db.one(req.params.id)
        res.json(results)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

//delete specific subscriber
router.delete('/subscriber/:id', async (req, res, next) =>{
    try{
        let results = await db.delete(req.params.id)
        if(results.affectedRows > 0)
            res.json({ message: "Delete successfully!"})
        else
            res.json({ message: 'Subscriber not found!'})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})





module.exports = router