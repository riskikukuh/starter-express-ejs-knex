const { Router } = require('express');
const { webHomeHandler, web404Handler, web500Handler } = require('../controllers/homeController');
const { webRouterMiddleware } = require('../middlewares/webMiddleware');
const {
    webGetBooksHandler, webGetAddBooksHandler, webPostBooksHandler, webGetEditBooksHandler, webPostEditBooksHandler, webGetDeleteBooksHandler,
} = require('../controllers/bookController');

const webRouter = Router();

// Home
webRouter.use(webRouterMiddleware);

webRouter.get('/', webHomeHandler);

// Book
webRouter.get('/books', webGetBooksHandler);
webRouter.get('/books/add', webGetAddBooksHandler);
webRouter.post('/books', webPostBooksHandler);
webRouter.get('/books/:id/edit', webGetEditBooksHandler);
webRouter.post('/books/:id/edit', webPostEditBooksHandler);
webRouter.get('/books/:id/delete', webGetDeleteBooksHandler);

// Unspecified Endpoint
webRouter.get('*', web500Handler);

module.exports = webRouter;