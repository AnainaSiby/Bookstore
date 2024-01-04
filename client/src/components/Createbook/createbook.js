import React, { useState } from "react";
import "./createbook.css";
import { Form, Container, Row, Col } from "react-bootstrap";
import { TextField, Button } from "@mui/material";
import { styles } from "./style.js";
import AXIOS from "axios";

export default function AddBook() {
  const [bcode, setBcode] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:9000/api/addbook";
    AXIOS.post(url, { bcode, title, author, year }).then((res) => {
      var stat = res.data.status;
      if (stat) {
        alert(res.data.message);
        setBcode("");
        setTitle("");
        setAuthor("");
        setYear(0);
      } else {
        alert(res.data.message);
      }
    });
  };
  return (
    <Container>
      <Row className="justify-content-center p-2 mt-4">
        <Col lg={6} className="col p-2 shadow rounded">
          <Form className="p-4 form" onSubmit={handleSubmit}>
            <div className="formHead">
              <h2>ADD A BOOK</h2>
            </div>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <TextField
                fullWidth
                id="fullWidth"
                label="Book Code"
                variant="outlined"
                color="error"
                sx={styles.input}
                value={bcode}
                onChange={(e) => setBcode(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                color="error"
                sx={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <TextField
                fullWidth
                id="fullWidth"
                label="Author"
                variant="outlined"
                color="error"
                sx={styles.input}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4 formControl" controlId="formBasicEmail">
              <TextField
                fullWidth
                id="fullWidth"
                label="Year of Publication"
                variant="outlined"
                color="error"
                sx={styles.input}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="outlined"
              size="large"
              color="error"
              className="regbtn mt-1"
              type="submit"
            >
              ADD
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
