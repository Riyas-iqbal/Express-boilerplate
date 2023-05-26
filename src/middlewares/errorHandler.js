
const errorHandler = (error, req, res, next) => {
    return res.status(500).json(error.message)
}

export default errorHandler 