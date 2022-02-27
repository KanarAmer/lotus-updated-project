const express = require('express')
const dotenv = require('dotenv').config()
const DB_CONN = require('./db/connection')
const authRoute = require('./routes/auth')
const cors = require('cors')

const app = express()

app.use(cors())

//json parser & unlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//app routes
app.use('/api/auth', authRoute)

//connect to db
DB_CONN(process.env.DB_HOST)

app.listen({PORT} = process.env, () => console.log(`listening on port ${PORT}`))