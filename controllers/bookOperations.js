// import models
const Books = require('../models/books')

// creating books
const createBook = async (req,res) => {
    // getting db fields from db
    const title = req.body.title;
    const author = req.body.author;
    const body = req.body.body;

    // creating data of books
    const books = await Books.create({
        title,
        author,
        body
    });

    // respond write new books
    res.json({books : books});
}

// showing books
const showBooks = async (req,res) => {
    // finding all book data
    const book = await Books.find();
    // respond with them
    res.json({books : book});
}

// showing book requested
const showById = async (req,res) => {
    // getting uri id
    const bookId = req.params.id;
    // finding the match
    const book = await Books.findById(bookId);
    // respond the book
    res.json({books:book});
}

// updating book
const updateBook = async (req,res) => {
    // get update id from uri
    const id = req.params.id;

    // get the new data
    const title = req.body.title;
    const author = req.body.author;
    const body = req.body.body;

    // updating the data
    // not show updated response
    await Books.findByIdAndUpdate(id,{
        title,
        author,
        body
    });

    // for showing updated response
    const updatedBook = await Books.findById(id);

    // responding with it
    res.json({updatedBooks:updatedBook});
}

// deleting book
const deleteBook =  async (req,res) => {
    // getting the uri id
    const id = req.params.id;

    // deleting the book
    const deletedBook = await Books.findByIdAndDelete(id);

    // getting remaining books
    const remainings = await Books.find();

    // responding with remainings
    res.json({remainingBooks:remainings,deletedBook:deletedBook})
}

module.exports = {
    createBook,
    showBooks,
    showById,
    updateBook,
    deleteBook
}
