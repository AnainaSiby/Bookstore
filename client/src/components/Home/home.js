import { Button, Col, Row } from "react-bootstrap";
import "./home.css";
import book from "../../bs-main.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/addbook");
  };

  const handleView = () => {
    navigate("/mybooks");
  };

  return (
    <div className="main">
      <div className="card shadow">
        <div className="title">
          <img src={book} alt="a-book-bundle" />
          <h1>MY BOOKSTORE</h1>
        </div>
        <div className="options">
          <Row className="options-row">
            <Col className="btn1">
              <Button variant="danger" onClick={handleAdd}>
                ADD A BOOK
              </Button>
            </Col>
            <Col className="btn2">
              <Button variant="outline-danger" onClick={handleView}>
                VIEW LIBRARY
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
