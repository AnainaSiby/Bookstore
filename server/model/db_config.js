const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
  console.log("db connected successfully!!!");
}

const bookSchema = mongoose.Schema(
  {
    bcode: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model("books", bookSchema);

module.exports = {
  bookModel,
};
