const e = require("express");
const winston= require('winston')

//almacenar errores en archivo
const logger = winston.createLogger({
    level:'error',
    format: winston.format.json(),
    transports:[
        new winston.transports.File({filename:'error.log'})
    ]
})
 
class AppError extends Error{

    constructor(message,statusCode) {
        super(this.message)
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4')|| `${statusCode}`.startsWith('5') ? 'fail':'error';
        this.isOperational = true

        Error.captureStackTrace(this,this.constructor)
    }
}

const globalErrorHandler=(err,req,res,next) =>{
    err.statusCode = err.statusCode||500;
    err.status=err.status  || 'error'

    logger.error(err.message)
    res.status(err.statusCode).json({
        statur:err.status,
        message:err.message,
        error:err
    })

};

module.exports ={
    AppError,
    globalErrorHandler
}