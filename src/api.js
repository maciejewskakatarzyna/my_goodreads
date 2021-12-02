import axios from "axios";

const BASE_URL = 'http://localhost:4000/books'
const BooksAPI = {
    getAllBooks: async function() {
        const response = await axios.get(BASE_URL)
        const books = response.data
        return books;
    },

    // getBooksToRead: async function() {
    //     const response = await axios.get(BASE_URL)
    //     const booksToRead = response.data.filter(book => book.exclusiveShelf === 'to-read')
    //     return booksToRead;
    // },
    //
    // getBooksRead: async function() {
    //     const response = await axios.get(BASE_URL)
    //     const booksRead = response.data.filter(book => book.exclusiveShelf === 'read')
    //     return booksRead;
    // },
    //
    // getBooksCurrent: async function() {
    //     const response = await axios.get(BASE_URL)
    //     const currentBooks = response.data.filter(book => book.exclusiveShelf === 'currently-reading')
    //     return currentBooks;
    // },

    addBook: async function(bookToAdd) {
        const response = await axios.post(BASE_URL, bookToAdd)
        const addedBook = response.data
        return addedBook;
    },

    replaceBook: async function(bookToReplace) {
        if (!bookToReplace.id) {
            throw new Error("Book has to have an id to be updated")
        }
        const response = await axios.put(`${BASE_URL}/${bookToReplace.id}`, bookToReplace)
        const replacedBook = response.data
        return replacedBook;
    },
    removeBook: async function(bookToRemove) {
        if (!bookToRemove) {
            throw new Error("Book has to have an id to be removed");
        }
        await axios.delete(`${BASE_URL}/${bookToRemove}`)
    }
}

export default BooksAPI;
