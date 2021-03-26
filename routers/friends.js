const express = require('express')
const friend = require('../models/friend')
const router = express.Router()
const Friend = require('../models/friend')

router.get('/',async(req,res)=>{
    try{
        const friends = await Friend.find()
        res.json(friends)
    }
    catch(err){
        res.send("Error")
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const friends = await Friend.findById(req.params.id)
        res.json(friends)
    }
    catch(err){
        res.send("Error")
    }
})

router.post('/', async(req,res)=>{
    const friend = new Friend({
        name: req.body.name,
        occupation: req.body.occupation
    })
    try{
       const f1 =  await friend.save()
       res.json(f1)
    }
    catch(err){
        res.send("Error")
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const friendz = await friend.findById(req.params.id)
        friendz.occupation = req.body.occupation
        const f2 = await friendz.save()
        res.json(f2)
    }
    catch(err){
        res.send("error!")
    }
})

router.delete('/:id',async(req,res) =>{
    try{
        const fr = await friend.findById(req.params.id)
        const f = await fr.remove()
        res.send('Data Removed')
 
    }catch(err){
        res.send('Error')
    }
 
})


module.exports = router