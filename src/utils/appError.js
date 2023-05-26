class AppError extends Error {
    constructor(appCode, errorMessage, statusCode) {
        super(errorMessage)
        this.appCode = appCode
        this.statusCode = statusCode
    }

    static ValidationError(message) {
        return new AppError(1001, message, 400)
    }

    static UserNotFound(message){
        return new App
    }
}


export default AppError