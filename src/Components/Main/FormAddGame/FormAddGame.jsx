import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../Button/Button";
import "./Style.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ColorPalette from "../../ColorPalette/ColorPalette";
import { useKey } from "../../../hooks/useKey";

const generateUniqueId = () => {
  return uuidv4();
};

export default function FormAddGame({ onAddGame, games }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState("");
  const [dev, setDev] = useState("");
  const [image, setImage] = useState("");
  const [platform, setPlatform] = useState("");
  const [complete, setComplete] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("ffffff");
  const [textColor, setTextColor] = useState("black");

  const isEmpty = games.length === 0;

  function handleShowForm() {
    setShowAddForm((show) => !show);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newGame = {
      id: generateUniqueId(),
      name,
      developer: dev,
      image,
      platform,
      completed: complete,
      aditionDate: Date.now(),
      textColor,
      backgroundColor,
    };
    onAddGame(newGame);
    setName("");
    setDev("");
    setShowAddForm(false);
    setImage("");
    setBackgroundColor("ffffff");
    setTextColor("black");
    console.log(newGame);
  }

  useKey("Escape", () => setShowAddForm(false));
  useKey("Enter", () => setShowAddForm(true));

  const inputName = useRef(null);
  useEffect(() => {
    if (!showAddForm) return;
    inputName.current.focus();
  }, [showAddForm]);

  return (
    <>
      {!isEmpty && (
        <div className="button-open-add-form">
          <Button onClick={handleShowForm}>
            {showAddForm ? "Close Form" : "Add new Game"}
          </Button>
        </div>
      )}

      {showAddForm && !isEmpty && (
        <>
          <form className="form-add-game" onSubmit={onSubmit}>
            <Row>
              <Col className="column-form" md={6}>
                <FloatingLabel controlId="floatingInput" label="Game's name">
                  <Form.Control
                    type="text"
                    placeholder="game's name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={inputName}
                  />
                </FloatingLabel>
              </Col>
              <Col className="column-form" md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Game's developer"
                >
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    value={dev}
                    onChange={(e) => setDev(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <Col className="column-form" md={6}>
                <FloatingLabel controlId="floatingInput" label="Gamge's Image">
                  <Form.Control
                    type="text"
                    placeholder="Game's Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col className="column-form" md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Platform you played"
                >
                  <Form.Control
                    type="text"
                    placeholder="Platform you played"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={2}>
                <div className=" checkbox-add-form">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id={`default-`}
                    label={`Completed`}
                    checked={complete}
                    onChange={(e) => setComplete(e.target.checked)}
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="palette">
                  <span>Select the Color Card: </span>
                  <ColorPalette onSelectColor={setBackgroundColor} />
                </div>
              </Col>
              <Col md={4}>
                <div className="palette">
                  <span>Select the color Text: </span>
                  <ColorPalette onSelectColor={setTextColor} />
                </div>
              </Col>
            </Row>
            <Button backgroundColor="white" textColor="black">
              Add Game
            </Button>
          </form>
        </>
      )}
    </>
  );
}
