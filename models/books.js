const mongoose = require("mongoose");

// creating schema (like table...)
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
});

const Books = mongoose.model("Books" /*model name*/, bookSchema);

module.exports = Books;
