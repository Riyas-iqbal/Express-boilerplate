
const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500
    const responseData = {
        errors: {
            code: error.appCode || 500,
            message: error.message || 'Internal Server Error',
        }
    }
    res.status(statusCode).json(responseData)
}

export default errorHandler 