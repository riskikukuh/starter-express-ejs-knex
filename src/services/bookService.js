const books = [];

const getBooks = async () => {
    return books;
}

const addBook = async (name, description) => {
    const length = books.length;
    books.push({
        id: length + 1,
        name,
        description,
    });
}

const findBookById = async (id) => {
    const book = books.filter((book) => book.id == id)[0];
    return book;
}

const editBook = async (id, {name, description}) => {
    const index = books.findIndex((book) => book.id == id);
    const newBook = {
        id,
        name, 
        description,
    }
    const book = books.splice(index, 1, newBook);
}

const deleteBook = async (id) => {
    const index = books.findIndex((book) => book.id == id);
    books.splice(index, 1);
}

module.exports = {
    getBooks,
    addBook,
    findBookById,
    editBook,
    deleteBook,
}