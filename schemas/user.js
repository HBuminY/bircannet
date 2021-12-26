const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{type:'string', required:true},
    username:{type:'string', required:true},
    password:{type:'string', required:true},
    age:{type:'string'}
});

module.exports = mongoose.model('users', userSchema);