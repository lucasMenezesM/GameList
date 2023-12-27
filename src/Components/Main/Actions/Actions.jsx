import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "../../Button/Button";
import React from "react";
import "./Style.css";

export default function Actions({ onOrder, onClear, filter, onSetFilter }) {
  // const [filter, setFilter] = useState("default");

  function handleSelectFilter(e) {
    // setFilter(e.target.value);
    // onOrder(e.target.value);
    onSetFilter(e.target.value);
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
            <option value="input">input order</option>
            <option value="name">Name</option>
            <option value="completed">Completed games</option>
            <option value="uncompleted">Uncompleted Games</option>
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
