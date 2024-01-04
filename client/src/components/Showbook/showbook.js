import { useParams } from "react-router-dom/dist";
import "./showbook.css";
import AXIOS from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ShowBook() {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:9000/api/books/${id}`;
    AXIOS.get(url).then((response) => {
      setBook(response.data.book);
    });
  }, [id]);
  return (
    <div className="main">
      <div className="book-card">
        <h1>{book.title}</h1>
        <h3>
          <span>BOOK CODE:</span> {book.bcode}
        </h3>
        <h3>
          <span>AUTHOR: </span>
          {book.author}
        </h3>
        <h3>
          <span>YEAR OF PUBLICATION:</span> {book.year}
        </h3>
        <div className="options">
          <Row className="options-row">
            <Col className="btn1">
              <Link to={`/edit/${book._id}`}>
                <Button variant="danger">EDIT</Button>
              </Link>
            </Col>
            <Col className="btn2">
              <Link to={`/delete/${book._id}`}>
                <Button variant="outline-danger">DELETE</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
