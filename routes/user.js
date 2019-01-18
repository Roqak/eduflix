const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const passport = require('passport');
const jwt= require('jsonwebtoken');
const auth = require('./auth')(passport)
// mongoose.connect();

router.get('/',(req,res)=>{
    res.send("User route")
});
router.get('/user/:id',passport.authenticate('jwt', { session: false }),(req,res)=>{
    res.send(req.params.id);
});
router.post('/sigin',(req,res)=>{
    res.send(req.body.username + " "+req.body.password);
});
router.post('/signup',(req,res)=>{
    User.findOne({username: req.body.username})
    .then(user=>{
        if(!user){
            const newUser = new User({username: req.body.username,
            password: req.body.password})
            newUser.save()
            .then((user)=>{console.log("user registered")
            res.status(200).json({message:"User Registered"})
        })
            .catch(err=>{console.log("error registering user "+ err)})
        }else{
            console.log("User exists");
            res.status(404).json({message:"User found already registered"})
        }
    })
    .catch((err)=>{console.log("error finding user "+ err)})
    // res.send(req.body.username + " "+req.body.password + " "+req.body.email);    

})

router.post("/login",(req,res)=>{
    User.findOne({username: req.body.username})
    .then(user=>{
        if(user){
            if(user.password === req.body.password){
                // res.status(200).json({msg: "Login Successful"})
                const authUser = {
                    id: user.id,
                    username: user.username,
                    password: user.password
                }
                jwt.sign(authUser,'secret',(err,token)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(token)
                        res.status(200).json({token})
                    }
                });
            }else{
                res.status(403).json({errorMsg:"Login not Successful"})
            }
        }else{
            res.status(403).json({errorMsg:"User not found"})
        }
    })
})









module.exports = router;