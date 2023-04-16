const express = require('express')
const { authLimiter } = require('./middlewares/rateLimiter')
const customLog = require('./middlewares/logger')
require('dotenv').config()

const app = express()

//Custom Http logging console and local
app.use(customLog)

// Limit repeated failed requests to auth endpoints
if (process.env.NODE_ENV === 'production') {
    console.log('hey')
    app.use('/api/auth', authLimiter)
}

//routes
app.use('/api', require('./router'))

app.use('*', (req, res) => {
    res.status(404).json('Not found')
})

app.listen('3000', () => {
    console.log('server started at port - 3000')
})