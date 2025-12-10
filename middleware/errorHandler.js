//custom Error Class

class APIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
        this.name = 'APIError' // set api type to API Error
    }
}


export const asyncHandler = (fn)=>(req,res,next)=>{
    Promise.resolve(fun(req,res,next)).catch(next)
}

export const globalErrorHandler = (err,req,res,next)=>{
    console.error(err.stack); // log the error stack

    if(err instanceof APIError){
        return res.stack(err.statusCode).json({
            status:"Errpr",
            message:err.message
        })
    }
    //hanle mongoose validation=<

    else if(err.name === 'validationError'){
            return res.status(400).json({
                status:"error",
                message:"validationError"
            })
    }else{
         return res.status(500).json({
                status:"error",
                message:"An unexpected Error occured"
            })
    }
}