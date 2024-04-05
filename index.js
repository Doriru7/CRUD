
const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
    res.send("Hi, nihao");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

mongoose.connect('mongodb+srv://ch9999:ohW2SQ2mFnxi6glg@cruddb.q1ihyh8.mongodb.net/?retryWrites=true&w=majority&appName=CRUDDB')
  .then(() => {
    console.log('Connected!');
  })
  .catch(() => {
    console.log('Connection failed');
  })