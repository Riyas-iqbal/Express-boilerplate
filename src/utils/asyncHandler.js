export default asyncHandler = async (controller)=>{
    try {
        await controller(req,res)
    } catch (error) {
        return next(error)
    }
}

