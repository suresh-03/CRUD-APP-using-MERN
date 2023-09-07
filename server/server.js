// importing dependencies
const express = require('express')
const cors = require('cors')

// loading env variables
require('dotenv').config()

// importing connectToDb
const connectToDb = require('../config/connectToDb');


// connecting to database
connectToDb();

// creating express app
let app = express();

// enable express app allow json file
app.use(express.json());

// cors = Cross Origin Resource Sharing - 
app.use(cors())

// importing CRUD operations
// object destructuring
const {createBook, showBooks, showById, updateBook, deleteBook} = require("../controllers/bookOperations")

// routing

// creating books
app.post('/createBooks', createBook)

// showing books
app.get('/showBooks', showBooks)

// showing requested book
app.get("/showBooks/:id", showById)

// updating book data
app.put("/updateBook/:id", updateBook)

// deleting a book
app.delete("/deleteBook/:id", deleteBook)

//creating server
app.listen(process.env.PORT,err => {
    if(err) console.log(err);
    console.log(`listening in PORT ${process.env.PORT}...`)
})