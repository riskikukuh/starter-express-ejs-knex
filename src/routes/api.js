const { Router } = require('express');
const { apiRouterMiddleware } = require('../middlewares/webMiddleware');

const apiRouter = Router()

apiRouter.use(apiRouterMiddleware);

module.exports = apiRouter;