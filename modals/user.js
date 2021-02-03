const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone_no : {
        type : Number,
        unique : true,
        required : true,
        minlength : 10,
        maxlength :10,
    },
    address : {
        type : String,
        required :true,
        maxlength : 80
    },
    user_type : {
        type : String,
        default : 'NON',
    }
})

const modal = mongoose.model("User" , userSchema);

module.exports = modal;