const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    res.send('User registered');
    const {name,email,password} = req.body;
    new User({name,email,password}).save()
    .then((result) => {
        console.log('User registered');
        res.json(result);
    }).catch((err) => {
        console.log('Error registering user'+ err);
    });
})

router.post('/authenticate',async (req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    await User.findOne(req.body)
    .then((result) => {
        if(result){
            res.json(result);
        }
        else{
            res.status(401).json({message:'Invalid credentials'});
        }
    }).catch((err) => {
        console.log('Error authenticating user'+ err);
        res.status(500).json({message:'Server error'});
    });
})

module.exports = router;