import { useEffect, useState } from "react";
import AXIOS from "axios";
import { Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "./viewbooks.css";

export default function Viewbooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "http://localhost:9000/api/books";
    AXIOS.get(url).then((response) => {
      setBooks(response.data.books);
    });
  }, []);

  return (
    <div>
      <div className="view-head">
        <h2>MY LIBRARY</h2>
      </div>
      <div className="table-div">
        <Table bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>BOOK CODE</th>
              <th>TITLE</th>
              <th>AUTHOR</th>
              <th>YEAR OF PUBLICATION</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.bcode}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>
                  <div className="actions">
                    <div>
                      {" "}
                      <a href={`/book/${book._id}`}>
                        <FaEye />
                      </a>
                    </div>
                    <div>
                      {" "}
                      <a href={`/edit/${book._id}`}>
                        <MdEdit />
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href={`/delete/${book._id}`}>
                        <MdDelete />
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
