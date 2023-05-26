import AppError from "../utils/app.error.js";
import asyncErrorWrapper from "../utils/async.handler.js";
import { StatusCodes } from 'http-status-codes'

const testErrorHandling = asyncErrorWrapper(async (req, res) => {

    res.status(StatusCodes.OK).json({message: 'This is an error handling test error'})
    
    // throw AppError.ValidationError('This is an app error')
})

export default {
    testErrorHandling
}

