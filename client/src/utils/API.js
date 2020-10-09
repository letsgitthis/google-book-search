import axios from "axios";

// the api we will use
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    // searches the api
    searchBooks: (query) => axios.get(BaseUrl + query),
    // Gets the book searched
    getBooks: () => axios.get("/api/books"),
    // saves the book
    saveBook: (bookData) => axios.post("/api/books", bookData),
    // deletes the book with the specific id
    deleteBook: (id) => axios.delete("api/books/" + id)
};