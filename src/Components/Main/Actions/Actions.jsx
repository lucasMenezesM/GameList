import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "../../Button/Button";
import React from "react";
import "./Style.css";

export default function Actions({ onOrder, onClear }) {
  const [filter, setFilter] = useState("default");

  function handleSelectFilter(e) {
    setFilter(e.target.value);
    onOrder(e.target.value);
  }

  return (
    <div className="options-component">
      <Row>
        <Col md={2}>
          <label>Filter your games by</label>
        </Col>
        <Col md={5}>
          <Form.Select
            aria-label="Default select example"
            value={filter}
            onChange={(e) => handleSelectFilter(e)}
          >
            <option value="default">Select an Option</option>
            <option value="input">Orber by input</option>
            <option value="name">by Name</option>
            <option value="complet">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Button onClick={onClear}>Clear List</Button>
        </Col>
      </Row>
    </div>
  );
}
