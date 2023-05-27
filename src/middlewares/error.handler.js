import AppError from "../utils/app.error.js"
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

const errorHandler = (error, req, res, next) => {
    console.log('Is Error instance of App Error', error instanceof AppError)

    console.log('Error is - ', error)

    if (error instanceof AppError) {
        const statusCode = error.statusCode || 500
        const responseData = {
            errors: {
                code: error.appCode || StatusCodes.INTERNAL_SERVER_ERROR,
                message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
            }
        }
        return res.status(statusCode).json(responseData)
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
}

export default errorHandler