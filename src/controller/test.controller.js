import AppError from "../utils/appError.js";
import asyncErrorWrapper from "../utils/async.handler.js";

const testErrorHandling = asyncErrorWrapper(async(req,res) => {
    
    throw AppError.ValidationError('This is an app error')
})

export default {
    testErrorHandling
}

