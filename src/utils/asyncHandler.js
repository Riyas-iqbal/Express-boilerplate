const asyncHandler = async (controller)=>{
    try {
        await controller(req,res)
    } catch (error) {
        return next(error)
    }
}

module.exports = asyncHandler