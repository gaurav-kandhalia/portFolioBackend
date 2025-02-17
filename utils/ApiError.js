
class ApiError extends Error{

    constructor(statuscode,stack="",message="something went wrong",errors=[],stack=""){

       super(message)
        this.statuscode = statuscode;
        this.data = null;
        this.errors = errors;
        this.success = false;
        this.message = message;


        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
       
        

    }
};

export {ApiError}
