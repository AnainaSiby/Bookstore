const express = require("express");
const { books, getBooks, showBook, updateBook, deleteBook } = require("../control/service.js");
const router = express.Router();

router.route("/addbook").post(books);
router.route("/books").get(getBooks);
router.route("/books/:id").get(showBook);
router.route("/updatebook/:id").put(updateBook);
router.route("/deletebook/:id").delete(deleteBook);

module.exports = router;
