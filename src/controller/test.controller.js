import AppError from "../utils/app.error.js";
import asyncErrorWrapper from "../utils/async.handler.js";
import { StatusCodes } from 'http-status-codes'

const testErrorHandling = asyncErrorWrapper(async (req, res) => {
    const errorExists = true 
    if (errorExists) {
        throw AppError.validation()
    }
    res.status(StatusCodes.OK).json({ message: 'test' })
})

export default {
    testErrorHandling
}

