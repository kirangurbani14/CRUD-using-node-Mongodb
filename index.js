const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost/FriendsDb')
const con = mongoose.connection

con.on('open', (req,res) => {
        console.log("connected")
})

app.use(express.json())

const friendRouter = require('./routers/friends')
app.use('/friends', friendRouter)

app.listen(9000,()=>{
    console.log("listening on 9000")
})