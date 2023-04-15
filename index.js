const express = require('express')
const { authLimiter } = require('./src/middlewares/rateLimiter')
const customLog = require('./src/middlewares/logger')

const app = express()

//Custom Http logging console and local
app.use(customLog)

// Limit repeated failed requests to auth endpoints
if (process.env.NODE_ENV === 'production') {
    app.use('/api/auth', authLimiter)
}

//routes
app.use('/api', require('./src/router'))

app.use('*', (req, res) => {
    res.status(404).json('Not found')
})

app.listen('3000', () => {
    console.log('server started at port - 3000')
})