import { Button, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom/dist";
import AXIOS from "axios";
import "./deletebook.css";

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const url = `http://localhost:9000/api/deletebook/${id}`;
    AXIOS.delete(url).then((response) => {
      alert(response.data.message);
      navigate("/mybooks");
    });
  };

  const handleCancel = () => {
    navigate("/mybooks");
  };

  return (
    <div className="main">
      <div className="book-card">
        <h2>Are you sure you want to delete this book?</h2>
        <div className="options">
          <Row className="options-row">
            <Col className="btn1">
              <Button variant="danger" onClick={handleDelete}>
                CONFIRM
              </Button>
            </Col>
            <Col className="btn2">
              <Button variant="outline-danger" onClick={handleCancel}>
                CANCEL
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
