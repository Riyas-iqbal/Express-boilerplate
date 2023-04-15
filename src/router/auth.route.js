const router = require('express').Router()

router.get('/signin',async (req,res)=>{
    res.send('connection was sucessfull')
})

router.get('/hello',(req,res)=>{
    res.send('hey')
})

module.exports = router