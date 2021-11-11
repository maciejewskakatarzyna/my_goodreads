import axios from "axios";

const BASE_URL = 'http://localhost:4000/books/'
const BooksAPI = {
    getAllBooks: async function() {
        const response = await axios.get(BASE_URL)
        const books = response.data
        return books;
    },
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
