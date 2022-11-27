const books = require("../data/books");

const getBookByIdHandler = (request, h) => {
    const id = request.params;
    const book = books.filter((book) => book.id === id)[0];

    if(book !== undefined){
        return {
            status: 'Success',
            data: {
                book
            }
        }
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan'
    })
    response.code(404)

    return response;
}

module.exports = getBookByIdHandler;