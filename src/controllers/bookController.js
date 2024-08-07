const { errorHandler } = require("../utils/util")
const { getBooks, addBook, findBookById, deleteBook, editBook } = require('../services/bookService');

const webGetBooksHandler = async (req, res, next) => {
    errorHandler( async () => {
        const books = await getBooks();
        res.render('book/index', {
            books,
        });
    }, next);
}

const webGetAddBooksHandler = async (req, res, next) => {
    errorHandler( async () => {
        res.render('book/add');
    }, next);
}

const webPostBooksHandler = async (req, res, next) => {
    errorHandler( async () => {
        const { name, description } = req.body;
        addBook(name, description);
        res.redirect('/books');
    }, next);
}

const webGetEditBooksHandler = async (req, res, next) => {
    errorHandler( async () => {
        const { id } = req.params;
        const book = await findBookById(id);
        res.render('book/edit', {
            book,
        });
    }, next);
}

const webPostEditBooksHandler = async (req, res, next) => {
    errorHandler( async () => {
        const { id } = req.params;
        const { name, description } = req.body;
        await editBook(id, { name, description});
        res.redirect('/books');
    }, next);
}

const webGetDeleteBooksHandler = async (req, res, next) => {
    errorHandler( async () => {
        const { id } = req.params;
        await deleteBook(id);
        res.redirect('/books');
    }, next);
}

module.exports = {
    webGetBooksHandler,
    webGetAddBooksHandler,
    webPostBooksHandler,
    webGetEditBooksHandler,
    webPostEditBooksHandler,
    webGetDeleteBooksHandler,
}