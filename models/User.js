const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{ 
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type:String,
        },
    lastname: {
        type:String
    },
    courses: {
        type:[String]
    }
})

module.exports = User = mongoose.model('user',UserSchema);