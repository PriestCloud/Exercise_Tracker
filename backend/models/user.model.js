const mongoose = require('mongoose');

const Schema = mongoose.Schema();
const userSchema = new Schema({
    username:{
        type:string,
        required:true,
        unique:true,
        trim:true,
        minlength:5
            }
        },
    {
        timestamps:true,
    });
