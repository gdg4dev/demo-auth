const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 75
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 75
    },
    password: {
        type: String,
        required: true,
        min: 10,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)