
const errorHanlder = (error, req, res, next) => {
    return res.status(500).json(error.message)
}

module.exports = errorHanlder