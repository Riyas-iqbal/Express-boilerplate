import { Router } from 'express'
import isAuth from '../middlewares/authentication.js'

const router = Router()

router
    .route('/private')
    .post(
        isAuth,
        (req, res) => {
            console.log(req.user)
            res.send(req.user)
        }
    )

router
    .route('/')
    .get((req, res) => {
        console.log('test route accessed')
    })


export default router