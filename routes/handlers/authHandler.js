const user = require('../../db/user-schema')
const Joi = require('@hapi/joi')
const schema = {
    name: Joi.string().min(2).max(64).required(),
    email: Joi.string().min(4).max(64).email().required(),
    password: Joi.string().min(8).max(264).required()
}
exports.registerUser = (req, res) => {
    res.send('working')
}

exports.loginUser = (req, res) => {
    res.send('working')
}