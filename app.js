require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
mongoose.connect(process.env.AD_DB_CONFIG_URL, { useNewUrlParser: true }, () => console.log('connected to db'))
app.use(express.json())
app.use(express.static('public'))

app.use('/api/user', authRoute)
app.get('*', (req, res) => res.send('404'))

app.listen(3000, () => console.log('server started successfully'))