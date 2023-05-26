import { StatusCodes } from 'http-status-codes'
import * as errorCodes from '../config/error.codes.js'

class AppError extends Error {
    constructor(appCode, errorMessage, statusCode) {
        super(errorMessage)
        this.appCode = appCode
        this.statusCode = statusCode
    }

    static validation(message) {
        return new AppError(errorCodes.VALIDATION_ERROR, message, StatusCodes.BAD_REQUEST)
    }

    static authentication(message) {
        return new AppError(errorCodes.AUTHENTICATION_ERROR, message, StatusCodes.UNAUTHORIZED)
    }

    static forbidden(message) {
        return new AppError(errorCodes.FORBIDDEN_ERROR, message, StatusCodes.FORBIDDEN)
    }
}

export default AppError