const webRouterMiddleware = (req, res, next) => {
    req.router = 'web';
    next();
}

const apiRouterMiddleware = (req, res, next) => {
    req.router = 'api';
    next();
}

const errorMiddleware = (err, req, res, next) => {
    console.log("# Error found!");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || "Something went wrong";
    if (req.router == 'web') {
        const error = {
            statusCode: errStatus,
            message: errMsg,
        }
        res.render('error/500', {
            error,
        });
    } else if (req.router == 'api') {    
        res.status(errStatus).json({
            success: false,
            status: errStatus,
            message: errMsg,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
        })
    }
}

module.exports = {
    webRouterMiddleware,
    apiRouterMiddleware,
    errorMiddleware,
}