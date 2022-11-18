/*
const express = require('express');
const path=require('path')
const cors =require('cors')
const bodyParser = require("body-parser");
const app=express();

const port=3000;

/!*app.use(express.json())*!/

let books=[]

app.use(cors())

/!*app.get('/car1', (req, res) => {
    res.status(200).send({
        name:"bmw",
        color:"red"
    });
});*!/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books', (req, res) => {
    res.json(books);
});
app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});

app.post('/book', (req, res) => {
    // We will be coding here

            const book=req.body;

            books.push(book)

            res.send('book is added to the database')
});
app.post('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))*/
