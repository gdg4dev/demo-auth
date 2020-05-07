const express = require('express')
const router = express.Router()
const authHandler = require('./handlers/authHandler')

router
    .post('/register', authHandler.registerUser)

router
    .get('/login', authHandler.loginUser)

module.exports = router