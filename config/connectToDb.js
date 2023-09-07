// importing mongoose package
const mongoose = require('mongoose')

// imporring env variables
require('dotenv').config();

// function create connection
async function connectToDb(){
    await mongoose.connect(process.env.DB_URL);
    console.log('connected');
}

module.exports = connectToDb;