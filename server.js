const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

connectDB();

const transactions = require('./routes/transactions')

app.use('/api/transactions', transactions)

const PORT = process.env.PORT || 6000

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
})