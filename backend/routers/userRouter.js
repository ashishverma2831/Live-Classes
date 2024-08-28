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

router.get('authenticate',()=>{
    
})

module.exports = router;