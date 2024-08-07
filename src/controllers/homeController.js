const { errorHandler } = require("../utils/util");

const webHomeHandler = async (req, res, next) => {
    errorHandler(() => {
        res.render('home/index');
    }, next);
}

const web404Handler = async (req, res, next) => {
    res.render('error/404');
}

const web500Handler = async (req, res, next) => {
    res.render('error/500');
}

module.exports = { 
    webHomeHandler,
    web404Handler,
    web500Handler,
};