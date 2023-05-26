import AppError from "../utils/appError.js"

const errorHandler = (error, req, res, next) => {
    if (error instanceof AppError) {
        const statusCode = error.statusCode || 500
        const responseData = {
            errors: {
                code: error.appCode || 500,
                message: error.message || 'Internal Server Error',
            }
        }
        return res.status(statusCode).json(responseData)
    }

    res.statusCode(500).json({message: 'Internal Server Error'})
}

export default errorHandler 