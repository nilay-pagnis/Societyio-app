const express = require("express");
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser');
const {errorHandler} = require("./middleware/errorMiddleware");
const connectDB = require("./configDB/db");
const PORT = process.env.PORT || 5000;


const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use('/home', require('./routes/users'));
app.use('/user', require('./routes/society'));

app.use(errorHandler)

app.listen(PORT, () => {
});

connectDB();
app.use(express.json());

