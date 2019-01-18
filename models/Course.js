const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    coursename:{ 
        type:String,
        required: true
    },
    videos: {
        type: [String]
    }
})

module.exports = Course = mongoose.model('course',CourseSchema);