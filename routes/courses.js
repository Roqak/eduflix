const router = require('express').Router();
const mongoose = require('mongoose');
const Course = require('../models/Course');
var cloudinary = require('cloudinary');
const passport = require('passport');
const jwt= require('jsonwebtoken');
const auth = require('./auth');
// const multer = require('multer')();

cloudinary.config({ 
    cloud_name: 'akin', 
    api_key: '214354368478741', 
    api_secret: 'zDhkAXTEyn33LatDcX6yYrN2aMM' 
  });
// mongoose.connect();

router.get('/',(req,res)=>{
    Course.find({})
    .then((result)=>{
        res.json(result).status(200);
    })
    .catch(err=>{
        res.json(err).status(200);

    })
});
router.get('/course/:id',(req,res)=>{
    Course.findById(req.params.id)
    .then(result=>{
        if(!result){
            res.json({'message':'Not found'}).status(200);
        }else{
            res.json(result).status(200);
        }
    })
    .catch(err=>{
        res.json({'message':'Error'}).status(400);
    })
    // res.json(result).status(200);
});
router.post('/add',(req,res)=>{
    Course.findOne({coursename: req.body.coursename})
    .then(course=>{
        if(!course){
            const newCourse = new Course({coursename: req.body.coursename})
            newCourse.save()
            .then((course)=>{console.log("Course registered")
            res.status(200).json({message:"Course Registered"})
        })
            .catch(err=>{console.log("error registering course "+ err)})
        }else{
            console.log("course exists");
            res.status(404).json({message:"Course found already registered"})
        }
    })
    .catch((err)=>{console.log("error finding course "+ err)})
    // res.send(req.body.username + " "+req.body.password + " "+req.body.email);    

})

router.post('/course/:id/add',(req,res)=>{
    Course.findById(req.params.id)
    .then(result=>{
        if(!result){
            res.json({'message':'Not found'}).status(200);
        }else{
            let newCourseVideo = result.videos;
            let b = [req.body.videoname];
            let finalCourseVideo = newCourseVideo.concat(b);
            cloudinary.v2.uploader.upload("dog.mp4", 
                    { resource_type: "video", 
                        public_id: "eduflix",
                        eager: [
                        { width: 300, height: 300,
                            crop: "pad", audio_codec: "none" }, 
                    { width: 160, height: 100,
                        crop: "crop", gravity: "south",
                        audio_codec: "none" } ],                                   
                    eager_async: true
                    // eager_notification_url: "http://mysite/notify_endpoint"
                    },
        function(error, result) {console.log(result, error)});

            Course.findOneAndUpdate({_id:req.params.id},
                {videos: finalCourseVideo},
                {new: true},
                (result,err)=>{
                    if(result){
                        res.send(result).status(200);
                    }else{
                        res.send(err);
                    }
                    
                }
            )
            // console.log(res.videos)
            // .then((result)=>{
            //     res.json(result.videos).status(200);
            // })
            // .catch(error=>{
            //     res.json({'message':"Error adding videos"}).status(400);
            // })
            // res.send("Error2 ")
                // res.json({"mm":"kkldldld"}).status(200);

        }
    })
    .catch(err=>{
        res.send("Error "+err)
    })
    // res.json(result).status(200);
});

router.post('/cours/:id/add',(req,res)=>{
    Course.findById(req.params.id)
    .then(result=>{
        if(!result){
            res.json({'message':'Not found'}).status(200);
        }else{
            let newCourseVideo = result.videos;
            let b = [req.body.videoname];
            let finalCourseVideo = newCourseVideo.concat(b);
            console.log(req.file.myfile);

            Course.findOneAndUpdate({_id:req.params.id},
                {videos: finalCourseVideo},
                {new: true},
                (result,err)=>{
                    if(result){
                        res.send(result).status(200);
                    }else{
                        res.send(err);
                    }
                    
                }
            )
            // console.log(res.videos)
            // .then((result)=>{
            //     res.json(result.videos).status(200);
            // })
            // .catch(error=>{
            //     res.json({'message':"Error adding videos"}).status(400);
            // })
            // res.send("Error2 ")
                // res.json({"mm":"kkldldld"}).status(200);

        }
    })
    .catch(err=>{
        res.send("Error "+err)
    })
    // res.json(result).status(200);
})










module.exports = router;