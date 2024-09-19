const express = require('express');
const router = express.Router();

let books = [];

router.get('/books', (req, res) => {
  res.json(books);
});

router.post('/books', (req, res) => {
  const book = {
    id: books.length + 1,
    titulo: req.body.titulo,
    num_paginas: req.body.num_paginas,
    isbn: req.body.isbn,
    editora: req.body.editora
  };
  books.push(book);
  res.status(201).json(book);
});

router.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], ...req.body };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
});

router.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(book => book.id !== bookId);
  res.json({ message: "Livro deletado com sucesso" });
});

module.exports = router;
