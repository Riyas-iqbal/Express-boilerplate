class AppError extends Error {
    constructor(appCode, errorMessage, statusCode) {
        super(errorMessage)
        this.appCode = appCode
        this.statusCode = statusCode
    }

    static ValidationError(message) {
        return new AppError(VALIDATION, message, 400)
    }

    static UserNotFound(message){
        return new AppError()
    }
}

export default AppError