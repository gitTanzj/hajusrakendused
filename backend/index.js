const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./utils/db');
const sessions = require('express-session');
const cors = require('cors')

const User = require('./models/account');
User.sync()

const PORT = 4000
const app = express()

app.use(cors())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use(sessions({
    secret: 'thisismysecretkey',
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    resave: false
}))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const accountRoutes = require('./routes/account')
app.use('/account', accountRoutes)



app.listen(PORT, () => {
    console.log(`App listening now on port ${PORT}`)
})
