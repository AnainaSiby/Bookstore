const express = require("express");
const { bookModel } = require("../model/db_config.js");

//create
const books = async (req, res) => {
  try {
    const { bcode, title, author, year } = req.body
    var result = await bookModel.find({ bcode: bcode });
    if (!bcode || !title || !author || !year) {
      res.json({ status: false, message: "All fields are required" });
    } else if (result.length == 0) {
      const newBook = {
        bcode: bcode,
        title: title,
        author: author,
        year: year,
      };
      const addBook = await bookModel.create(newBook);
      res.json({ status: true, message: "Successfully Created" });
    } else {
      res.json({ status: false, message: "Book already exists!" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
};

//get all books
const getBooks = async (request, response) => {
  try {
    const allBooks = await bookModel.find({});
    response.json({ status: true, books: allBooks });
  } catch (error) {
    console.log(error);
  }
};

//get 1 book by ID
const showBook = async (request, response) => {
  try {
    const { id } = request.params;
    const book = await bookModel.findById(id);
    response.json({ status: true, book: book });
  } catch (error) {
    console.log(error);
  }
};

//Update
const updateBook =async (req,res) =>{
  try{
    const {id} = req.params;
    const result = await bookModel.findByIdAndUpdate(id,req.body);

    if(!result) {
      res.json({"status":false , "message":"Id not found"})
    }else{
      res.json({"status":true, "message":"Updated successfully"})
    }
  }
  catch(err){
    console.log(err)
  }
}

//Delete

const deleteBook = async (request,response)=>{
  try{
    const {id} = request.params;
    const result = await bookModel.findByIdAndDelete(id);

    if(result){
      response.json({"status":true, "message":"Book deleted successfully!"})
    }else{
      response.json({"status":false, "message":"Book not found!"})
    }
  }
  catch(error){
    console.log(error)
  }
}

module.exports = {
  books,
  getBooks,
  showBook,
  updateBook,
  deleteBook
};
