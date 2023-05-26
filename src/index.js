import app from './app.js'

const server = app.listen(parseInt(process.env.PORT), () => {
    console.log(`server started at port - ${process.env.PORT}`)
})

process.on('uncaughtException', (err) => {
    console.log('Uncaught exception - ', err)
    process.exit(1)
})

process.on('unhandledRejection', (err) => {
    console.log('Unhandled rejection - ', err)
    process.exit(1)
})

// termination signal from OS
process.on('SIGTERM',()=>{
    server.close((err)=>{
        console.log('Http server closed')
    })
    process.exit(err ? 1:0)
})
