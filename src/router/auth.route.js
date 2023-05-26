import { Router } from 'express'
import * as authController from '../controller/auth.controller.js'

const router = Router()

router
    .route('/signin')
    .post(
        authController.handleSignIn
        // refreshTokens.push(refreshToken)
    )

// router
//     .route('/signup')
//     .post(

//     )


// let refreshTokens = []

// app.post('/token', (req, res) => {
//     const refreshToken = req.body.token
//     if (refreshToken == null) return res.sendStatus(401)
//     if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         const accessToken = generateAccessToken({ name: user.name })
//         res.json({ accessToken: accessToken })
//     })
// })

// app.delete('/logout', (req, res) => {
//     refreshTokens = refreshTokens.filter(token => token !== req.body.token)
//     res.sendStatus(204)
// })


export default router